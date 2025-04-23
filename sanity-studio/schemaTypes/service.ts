export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      description: 'The name of the service',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the service',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image representing this service',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key features or benefits of this service',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this service (lower numbers appear first)',
      validation: Rule => Rule.required().integer().positive()
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      description: 'Text for the call-to-action button',
      initialValue: 'Book A Free Session'
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      description: 'Link for the call-to-action button',
      initialValue: '/booknow'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}
