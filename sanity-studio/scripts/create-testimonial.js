// Script to create a sample testimonial in Sanity
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

// Sample testimonial data
const testimonial = {
  _type: 'testimonial',
  name: 'Lesley Bingham',
  location: 'Tunbridge Wells',
  quote: 'I was diagnosed with Osteoporosis and six fractured vertebrae...but since finding OsteoStrong I haven\'t looked back and have just returned from skiing. I absolutely endorse OsteoStrong',
  featured: true,
  order: 1
  // Note: Image and video need to be uploaded manually through the Sanity Studio interface
};

// Function to create the testimonial
async function createTestimonial() {
  console.log('Creating sample testimonial in Sanity...');
  
  try {
    // Check if a testimonial with the same name already exists
    const existingTestimonials = await client.fetch('*[_type == "testimonial" && name == $name]', { 
      name: testimonial.name 
    });
    
    if (existingTestimonials.length > 0) {
      console.log(`A testimonial from ${testimonial.name} already exists. Skipping creation.`);
      return;
    }
    
    // Create the testimonial
    const result = await client.create(testimonial);
    console.log(`Testimonial created with ID: ${result._id}`);
    console.log('Please upload the image and video manually through the Sanity Studio interface.');
    
  } catch (error) {
    console.error('Error creating testimonial:', error);
  }
}

// Execute the function
createTestimonial();
