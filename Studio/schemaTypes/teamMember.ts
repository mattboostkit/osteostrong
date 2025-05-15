export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the team member',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Job title or role',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Profile photo of the team member'
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'A brief biography of the team member'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this team member (lower numbers appear first)',
      validation: Rule => Rule.required().integer().positive()
    },
    {
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
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image'
    }
  }
}
