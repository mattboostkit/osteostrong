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

This will:
- Create an author "OsteoStrong Team" if it doesn't exist
- Create a category "Bone Health" if it doesn't exist
- Create all 6 blog posts with the specified titles and content

### Customizing

If you want to customize the blog posts:

1. Open `scripts/create-blog-posts.js`
2. Modify the `blogPosts` array with your desired content
3. Run the script again

Note: The script checks if posts with the same titles already exist, so you can safely run it multiple times without creating duplicates.

## Adding Images

After running the script, you may want to add images to the blog posts:

1. Log in to your Sanity Studio
2. Navigate to the "Posts" section
3. Click on each post
4. Upload an image using the "Main image" field
5. Save the changes
