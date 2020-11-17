export default {
    name: 'weddings',
    title: 'Weddings',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Wedding Title',
          type: 'string',
          description: 'Title of the wedding',
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