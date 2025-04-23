export default {
  name: 'pageImage',
  title: 'Page Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the page image (e.g., "About Team Image", "Programs Header")',
      validation: Rule => Rule.required()
    },
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      description: 'Which page this image belongs to',
      options: {
        list: [
          {title: 'About', value: 'about'},
          {title: 'Programs', value: 'programs'},
          {title: 'Home', value: 'home'},
          {title: 'Contact', value: 'contact'},
          {title: 'Book Now', value: 'booknow'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      description: 'Which section of the page this image belongs to (e.g., "header", "team", "programs")',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The image file',
      validation: Rule => Rule.required()
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for the image (for accessibility)',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description of the image or its context',
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'page',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Page',
      name: 'pageAsc',
      by: [
        {field: 'page', direction: 'asc'},
        {field: 'section', direction: 'asc'}
      ]
    }
  ]
}
