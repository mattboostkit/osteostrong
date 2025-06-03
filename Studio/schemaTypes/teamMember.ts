import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the team member',
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
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Job title or role',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'qualifications',
      title: 'Professional Qualifications',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Professional qualifications and certifications (e.g., MD, PhD, PT)',
    }),
    defineField({
      name: 'specializations',
      title: 'Specializations',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Areas of expertise (e.g., osteoporosis, bone health, rehabilitation)',
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      description: 'Years of professional experience',
      validation: Rule => Rule.positive()
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Profile photo of the team member'
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'A brief biography of the team member'
    }),
    defineField({
      name: 'detailedBio',
      title: 'Detailed Biography',
      type: 'blockContent',
      description: 'Full biography with rich text formatting for team detail pages'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this team member (lower numbers appear first)',
      validation: Rule => Rule.required().integer().positive()
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
          description: 'LinkedIn profile URL (optional)'
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
          description: 'Facebook profile URL (optional)'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
          description: 'Instagram profile URL (optional)'
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
          description: 'Twitter profile URL (optional)'
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
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