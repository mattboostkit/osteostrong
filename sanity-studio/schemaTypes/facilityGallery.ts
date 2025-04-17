export default {
  name: 'facilityGallery',
  title: 'Facility Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'A title for this facility gallery',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of this facility gallery (optional)'
    },
    {
      name: 'images',
      title: 'Facility Images',
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
              },
              validation: Rule => Rule.required()
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
              name: 'area',
              title: 'Facility Area',
              type: 'string',
              description: 'Which area of the facility is shown',
              options: {
                isHighlighted: true,
                list: [
                  {title: 'Reception', value: 'reception'},
                  {title: 'Training Area', value: 'training'},
                  {title: 'Equipment', value: 'equipment'},
                  {title: 'Consultation Room', value: 'consultation'},
                  {title: 'Exterior', value: 'exterior'},
                  {title: 'Other', value: 'other'}
                ]
              }
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Facility Image',
      type: 'reference',
      to: [{type: 'siteImage'}],
      description: 'The main image to represent this facility (should be a site image with category "facility")',
      options: {
        filter: 'category == "facility"'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0'
    }
  }
}
