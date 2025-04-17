export default {
  name: 'siteImage',
  title: 'Site Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A title for this image',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'A description of the image for accessibility',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'A category for organizing images',
      options: {
        list: [
          {title: 'Hero', value: 'hero'},
          {title: 'About', value: 'about'},
          {title: 'Services', value: 'services'},
          {title: 'Testimonials', value: 'testimonials'},
          {title: 'Team', value: 'team'},
          {title: 'Facility', value: 'facility'},
          {title: 'Other', value: 'other'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A longer description of this image (optional)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
