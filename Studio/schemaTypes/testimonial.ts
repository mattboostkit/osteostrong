export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Member Name',
      type: 'string',
      description: 'Full name of the member giving the testimonial',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Location of the member (e.g., "Tunbridge Wells")',
      validation: Rule => Rule.required()
    },
    {
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      description: 'The testimonial text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Member Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Photo of the member (optional)'
    },
    {
      name: 'video',
      title: 'Video File',
      type: 'file',
      description: 'Upload a video testimonial file (optional)',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Thumbnail image for the video (optional)'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Whether this testimonial should be featured prominently',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this testimonial (lower numbers appear first)',
      validation: Rule => Rule.integer().positive()
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
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
    },
    {
      title: 'Member Name',
      name: 'nameAsc',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    }
  ]
}
