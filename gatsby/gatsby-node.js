import path from 'path'

async function createPortraitPages({ graphql, actions }) {
  const portraitTemplate = path.resolve('./src/templates/Portrait.js')

  const result = await graphql(`
    query {
      allSanityPortraits(sort: { fields: _createdAt, order: DESC }) {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const portraitNodes = (result.data.allSanityPortraits || {}).nodes || []

  portraitNodes.forEach((node, index) => {
    const { slug = {} } = node

    if (!slug) return
    actions.createPage({
      path: `/portraits/${slug.current}`,
      component: portraitTemplate,
      context: {
        slug: slug.current,
        prev:
          index === 0
            ? portraitNodes[portraitNodes.length - 1]
            : portraitNodes[index - 1],
        next:
          index === portraitNodes.length - 1
            ? portraitNodes[0]
            : portraitNodes[index + 1],
      },
    })
  })
}

export async function createPages(params) {
  await Promise.all([createPortraitPages(params)])
}
