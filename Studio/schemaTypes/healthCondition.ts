import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'healthCondition',
  title: 'Health Conditions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Condition Name',
      type: 'string',
      description: 'Name of the health condition (e.g., Osteoporosis, Osteopenia)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the condition',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'detailedContent',
      title: 'Detailed Content',
      type: 'blockContent',
      description: 'Comprehensive information about the condition'
    }),
    defineField({
      name: 'symptoms',
      title: 'Common Symptoms',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of common symptoms'
    }),
    defineField({
      name: 'riskFactors',
      title: 'Risk Factors',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Common risk factors for this condition'
    }),
    defineField({
      name: 'howOsteoStrongHelps',
      title: 'How OsteoStrong Helps',
      type: 'blockContent',
      description: 'Explain how OsteoStrong can help with this condition'
    }),
    defineField({
      name: 'statistics',
      title: 'Key Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'stat', type: 'string', title: 'Statistic'},
          {name: 'source', type: 'string', title: 'Source'}
        ]
      }],
      description: 'Important statistics about this condition'
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
      description: 'Services that help with this condition'
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO meta description (150-160 characters)',
      validation: Rule => Rule.max(160).warning('Meta descriptions should be under 160 characters'),
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Keywords for SEO',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Condition',
      type: 'boolean',
      description: 'Feature this condition prominently on the website',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
})