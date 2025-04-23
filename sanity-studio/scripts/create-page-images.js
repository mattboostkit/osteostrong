// Script to create sample page images in Sanity
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

// Sample page images data
const pageImages = [
  {
    _type: 'pageImage',
    title: 'About Team Image',
    page: 'about',
    section: 'team',
    alt: 'OsteoStrong Tunbridge Wells Team',
    description: 'Our dedicated team of professionals is committed to helping you achieve your health and strength goals.'
    // Note: Image needs to be uploaded manually through the Sanity Studio interface
  },
  {
    _type: 'pageImage',
    title: 'Programs Header Image',
    page: 'programs',
    section: 'header',
    alt: 'OsteoStrong Tunbridge Wells Programs',
    description: 'Discover how our specialized programs can help you build strength, improve bone density, and enhance your overall health.'
    // Note: Image needs to be uploaded manually through the Sanity Studio interface
  }
];

// Function to create the page images
async function createPageImages() {
  console.log('Creating sample page images in Sanity...');
  
  try {
    // Check if page images already exist
    const existingPageImages = await client.fetch('*[_type == "pageImage"]');
    
    if (existingPageImages.length > 0) {
      console.log(`${existingPageImages.length} page images already exist. Skipping creation.`);
      console.log('Existing page images:');
      existingPageImages.forEach(image => {
        console.log(`- ${image.title} (${image.page}/${image.section})`);
      });
      return;
    }
    
    // Create the page images
    for (const pageImage of pageImages) {
      const result = await client.create(pageImage);
      console.log(`Page image created with ID: ${result._id} - ${pageImage.title}`);
    }
    
    console.log('Please upload the images manually through the Sanity Studio interface.');
    
  } catch (error) {
    console.error('Error creating page images:', error);
  }
}

// Execute the function
createPageImages();
