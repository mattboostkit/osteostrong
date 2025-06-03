import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The frequently asked question',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
      description: 'The detailed answer to the question',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the FAQ (e.g., General, Medical, Pricing)',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Medical/Health', value: 'medical'},
          {title: 'Pricing', value: 'pricing'},
          {title: 'Sessions', value: 'sessions'},
          {title: 'Safety', value: 'safety'},
          {title: 'Results', value: 'results'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'relatedConditions',
      title: 'Related Conditions',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Health conditions this FAQ relates to (e.g., osteoporosis, osteopenia)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this FAQ (lower numbers appear first)',
      validation: Rule => Rule.required().integer().positive()
    }),
    defineField({
      name: 'featured',
      title: 'Featured FAQ',
      type: 'boolean',
      description: 'Show this FAQ prominently on the website',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
})