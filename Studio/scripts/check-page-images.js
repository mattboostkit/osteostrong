// Script to check existing page images in Sanity
const { createClient } = require('@sanity/client');
const config = require('./config');

// Initialize the Sanity client
const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  token: config.token, // Token from environment variables
  useCdn: config.useCdn,
});

// Function to check existing page images
async function checkPageImages() {
  console.log('Checking existing page images in Sanity...');
  
  try {
    // Get all page images
    const pageImages = await client.fetch('*[_type == "pageImage"]');
    
    if (pageImages.length === 0) {
      console.log('No page images found in Sanity.');
      return;
    }
    
    console.log(`Found ${pageImages.length} page images:`);
    
    // Log details of each page image
    pageImages.forEach((image, index) => {
      console.log(`\n--- Page Image ${index + 1} ---`);
      console.log(`ID: ${image._id}`);
      console.log(`Title: ${image.title}`);
      console.log(`Page: ${image.page}`);
      console.log(`Section: ${image.section}`);
      console.log(`Alt: ${image.alt || 'Not set'}`);
      console.log(`Description: ${image.description || 'Not set'}`);
      
      // Check if image is present and has the correct structure
      if (image.image) {
        console.log('Image: Present');
        if (image.image.asset && image.image.asset._ref) {
          console.log(`Image Reference: ${image.image.asset._ref}`);
          
          // Extract image details from the reference
          const refParts = image.image.asset._ref.split('-');
          if (refParts.length >= 4) {
            const dimensions = `${refParts[1]}x${refParts[2]}`;
            const format = refParts[3];
            console.log(`Image Dimensions: ${dimensions}`);
            console.log(`Image Format: ${format}`);
            
            // Construct the CDN URL
            const imageId = image.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp');
            const cdnUrl = `https://cdn.sanity.io/images/${config.projectId}/${config.dataset}/${imageId}`;
            console.log(`CDN URL: ${cdnUrl}`);
          } else {
            console.log('Image Reference format is unexpected');
          }
        } else {
          console.log('Image Asset Reference: Missing or malformed');
          console.log('Image Structure:', JSON.stringify(image.image, null, 2));
        }
      } else {
        console.log('Image: Not present');
      }
    });
    
  } catch (error) {
    console.error('Error checking page images:', error);
  }
}

// Execute the function
checkPageImages();
