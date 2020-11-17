export default {
    name: 'portraits',
    title: 'Portraits',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Portrait Title',
          type: 'string',
          description: 'Title of the portrait',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 100,
          },
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
}