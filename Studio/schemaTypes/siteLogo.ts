export default {
  name: 'siteLogo',
  title: 'Site Logo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A title for the logo (for internal reference)',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainLogo',
      title: 'Main Logo',
      type: 'image',
      description: 'The main logo used across the site',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'altLogo',
      title: 'Alternative Logo',
      type: 'image',
      description: 'An alternative version of the logo (e.g., for dark backgrounds)',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'The site favicon (small icon shown in browser tabs)',
      options: {
        hotspot: true,
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainLogo'
    }
  }
}
