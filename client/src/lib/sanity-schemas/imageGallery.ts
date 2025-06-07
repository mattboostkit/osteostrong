import { Rule } from 'sanity';

export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'A title for this image gallery',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of this gallery (optional)'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'A description of the image for accessibility',
              options: {
                isHighlighted: true
              }
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'A caption for the image (optional)',
              options: {
                isHighlighted: true
              }
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              description: 'A category for organizing images (optional)',
              options: {
                isHighlighted: true,
                list: [
                  {title: 'Hero', value: 'hero'},
                  {title: 'About', value: 'about'},
                  {title: 'Services', value: 'services'},
                  {title: 'Testimonials', value: 'testimonials'},
                  {title: 'Team', value: 'team'},
                  {title: 'Facility', value: 'facility'},
                  {title: 'Other', value: 'other'}
                ]
              }
            }
          ]
        }
      ],
      validation: (Rule: Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0'
    }
  }
}
