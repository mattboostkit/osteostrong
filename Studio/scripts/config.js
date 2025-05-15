// Configuration for Sanity scripts
require('dotenv').config({ path: '../../.env' });

// Export Sanity configuration with environment variables
module.exports = {
  projectId: process.env.SANITY_PROJECT_ID || '6ff7gi0z',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2023-05-03',
  // Token should only be included in secure environments and not committed to version control
  token: process.env.SANITY_TOKEN || '',
  useCdn: false
};
