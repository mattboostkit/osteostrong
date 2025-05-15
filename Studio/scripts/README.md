# Sanity CMS Scripts

This directory contains utility scripts for managing content in the Sanity CMS.

## Create Blog Posts

The `create-blog-posts.js` script creates 6 blog posts in Sanity with predefined content:

1. Meet the biohacker
2. What You Need to Know About Osteoporosis Drugs
3. Unveiling The Secrets of Bone Density
4. Not knowing your bone density score is like not knowing your weight
5. Getting Stronger
6. Are your bones out of sight out of mind?

### How to Run

To create these blog posts in your Sanity CMS:

1. Make sure you're in the `sanity-studio` directory
2. Run the following command:

```bash
npm run create-blog-posts
```

## Create Services

The `create-services.js` script creates 5 services in Sanity with predefined content:

1. Core OsteoStrong Session
2. Performance Assessment
3. Pulsed Electromagnetic Field (PEMF) Therapy
4. Compression Boots
5. Red Light Therapy

### How to Run

To create these services in your Sanity CMS:

1. Make sure you're in the `sanity-studio` directory
2. Run the following command:

```bash
npm run create-services
```

Note: The script will check if services already exist and will not create duplicates.

After running the script, you'll need to manually upload images for each service through the Sanity Studio interface. The script only creates the service entries with text content.

## Create Testimonial

The `create-testimonial.js` script creates a sample testimonial in Sanity with the following content:

- Name: Lesley Bingham
- Location: Tunbridge Wells
- Quote: "I was diagnosed with Osteoporosis and six fractured vertebrae...but since finding OsteoStrong I haven't looked back and have just returned from skiing. I absolutely endorse OsteoStrong"

### How to Run

To create this testimonial in your Sanity CMS:

1. Make sure you're in the `sanity-studio` directory
2. Run the following command:

```bash
npm run create-testimonial
```

Note: The script will check if a testimonial with the same name already exists and will not create duplicates.

After running the script, you'll need to manually upload the image and video for the testimonial through the Sanity Studio interface. The script only creates the testimonial entry with text content.

## Create Page Images

The `create-page-images.js` script creates sample page images in Sanity for the About and Programs pages:

1. About Team Image - For the team section on the About page
2. Programs Header Image - For the header section on the Programs page

### How to Run

To create these page image entries in your Sanity CMS:

1. Make sure you're in the `sanity-studio` directory
2. Run the following command:

```bash
npm run create-page-images
```

Note: The script will check if page images already exist and will not create duplicates.

After running the script, you'll need to manually upload the images through the Sanity Studio interface. The script only creates the page image entries with text content.
