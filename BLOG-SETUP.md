# Blog Setup Instructions

This document provides instructions for setting up the blog articles in Sanity CMS.

## Creating Blog Articles

Six blog articles have been prepared with the following titles:

1. Meet the biohacker
2. What You Need to Know About Osteoporosis Drugs
3. Unveiling The Secrets of Bone Density
4. Not knowing your bone density score is like not knowing your weight
5. Getting Stronger
6. Are your bones out of sight out of mind?

To create these articles in Sanity:

1. Navigate to the `sanity-studio` directory:
   ```
   cd sanity-studio
   ```

2. Run the create-blog-posts script:
   ```
   npm run create-blog-posts
   ```

3. This script will:
   - Create an author "OsteoStrong Team" if it doesn't exist
   - Create a category "Bone Health" if it doesn't exist
   - Create all 6 blog posts with the specified titles and content

## Adding Images to Blog Posts

After creating the blog posts, you should add images to them:

1. Start the Sanity Studio:
   ```
   npm run dev
   ```

2. Open the Sanity Studio in your browser (typically at http://localhost:3333)

3. Navigate to the "Posts" section

4. For each post:
   - Click on the post to edit it
   - Upload an image using the "Main image" field
   - Save the changes

## Viewing the Blog

Once the blog posts are created and images are added, you can view them on your website:

1. Start the website:
   ```
   cd ..  # Return to the root directory
   npm run dev
   ```

2. Open your browser and navigate to the blog page (typically at http://localhost:5173/blog)

## Troubleshooting

If you encounter any issues:

- Make sure you have the latest version of the codebase
- Check that Sanity Studio is properly configured
- Verify that your authentication token is valid
- Check the console for any error messages

For more detailed information, see the README in the `sanity-studio/scripts` directory.
