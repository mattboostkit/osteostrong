// Script to create initial services in Sanity
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

// Initial services data
const services = [
  {
    _type: 'service',
    title: 'Core OsteoStrong Session',
    slug: {
      _type: 'slug',
      current: 'core-osteostrong-session'
    },
    description: 'Our foundational service: a 15-minute session using our patented biomechanical equipment to trigger osteogenic loading.',
    features: [
      'Four specialised biomechanical devices',
      'Guided by certified OsteoStrong coach',
      'Weekly sessions for optimal results'
    ],
    order: 1,
    ctaText: 'Book A Free Session',
    ctaLink: '/booknow'
    // Note: Images need to be uploaded manually through the Sanity Studio interface
    // The image field expects a Sanity asset reference which can't be easily created via this script
  },
  {
    _type: 'service',
    title: 'Performance Assessment',
    slug: {
      _type: 'slug',
      current: 'performance-assessment'
    },
    description: 'Comprehensive evaluation of your current bone density, muscular strength, and balance to establish baselines and track improvement.',
    features: [
      'Detailed initial assessment',
      'Regular progress tracking',
      'Personalised improvement plan'
    ],
    order: 2,
    ctaText: 'Book A Free Session',
    ctaLink: '/booknow'
    // Note: Images need to be uploaded manually through the Sanity Studio interface
  },
  {
    _type: 'service',
    title: 'Pulsed Electromagnetic Field (PEMF) Therapy',
    slug: {
      _type: 'slug',
      current: 'pemf-therapy'
    },
    description: 'Advanced therapy that uses electromagnetic fields to stimulate cellular repair, reduce inflammation, and accelerate healing processes.',
    features: [
      'Non-invasive pain management',
      'Enhanced cellular regeneration',
      'Improved circulation and recovery'
    ],
    order: 3,
    ctaText: 'Book A Free Session',
    ctaLink: '/booknow'
    // Note: Images need to be uploaded manually through the Sanity Studio interface
  },
  {
    _type: 'service',
    title: 'Compression Boots',
    slug: {
      _type: 'slug',
      current: 'compression-boots'
    },
    description: 'Dynamic compression therapy that enhances circulation, reduces muscle soreness, and speeds up recovery after physical activity.',
    features: [
      'Accelerated recovery time',
      'Reduced muscle fatigue',
      'Enhanced lymphatic drainage'
    ],
    order: 4,
    ctaText: 'Book A Free Session',
    ctaLink: '/booknow'
    // Note: Images need to be uploaded manually through the Sanity Studio interface
  },
  {
    _type: 'service',
    title: 'Red Light Therapy',
    slug: {
      _type: 'slug',
      current: 'red-light-therapy'
    },
    description: 'Therapeutic exposure to red and near-infrared light that promotes cellular energy production, tissue repair, and reduced inflammation.',
    features: [
      'Skin rejuvenation',
      'Reduced joint pain',
      'Enhanced cellular function'
    ],
    order: 5,
    ctaText: 'Book A Free Session',
    ctaLink: '/booknow'
    // Note: Images need to be uploaded manually through the Sanity Studio interface
  }
];

// Function to create services
async function createServices() {
  console.log('Creating services in Sanity...');

  try {
    // Check if services already exist
    const existingServices = await client.fetch('*[_type == "service"]');

    if (existingServices.length > 0) {
      console.log(`Found ${existingServices.length} existing services. Skipping creation.`);
      console.log('If you want to recreate services, please delete the existing ones first.');
      return;
    }

    // Create each service
    for (const service of services) {
      console.log(`Creating service: ${service.title}`);
      await client.create(service);
    }

    console.log('All services created successfully!');
  } catch (error) {
    console.error('Error creating services:', error);
  }
}

// Execute the function
createServices();
