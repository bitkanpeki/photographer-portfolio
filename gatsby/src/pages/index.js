import { Link } from 'gatsby'
import React from 'react'

const HomePage = () => (
  <div>
    <Link to="/photos/dima-dallacqua/">Go DIMA</Link>
    <Link to="/photos/evan-clark/">Go CLARK</Link>hello
  </div>
)

// export const query = graphql`
//   query {
//     galleryImages: allSanityPortraits(
//       sort: { fields: _createdAt, order: DESC }
//     ) {
//       nodes {
//         id
//         name
//         image {
//           asset {
//             fluid(maxWidth: 600) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//     lightboxImages: allSanityPortraits(
//       sort: { fields: _createdAt, order: DESC }
//     ) {
//       nodes {
//         id
//         name
//         image {
//           asset {
//             fluid(maxWidth: 2000) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default HomePage
