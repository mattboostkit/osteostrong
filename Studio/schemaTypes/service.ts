import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      description: 'The name of the service',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the service',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image representing this service',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key features or benefits of this service',
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'targetConditions',
      title: 'Target Conditions',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Health conditions this service helps with (e.g., osteoporosis, osteopenia, bone density)',
    }),
    defineField({
      name: 'duration',
      title: 'Session Duration',
      type: 'string',
      description: 'How long each session takes (e.g., "15 minutes")',
    }),
    defineField({
      name: 'frequency',
      title: 'Recommended Frequency',
      type: 'string',
      description: 'How often this service should be used (e.g., "Once per week")',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this service (lower numbers appear first)',
      validation: Rule => Rule.required().integer().positive()
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      description: 'Text for the call-to-action button',
      initialValue: 'Book A Free Session'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      description: 'Link for the call-to-action button',
      initialValue: '/booknow'
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO meta description (150-160 characters)',
      validation: Rule => Rule.max(160).warning('Meta descriptions should be under 160 characters'),
    })
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
})