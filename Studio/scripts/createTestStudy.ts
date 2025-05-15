import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '6ff7gi0z',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN // You'll need to set this in your .env file
});

async function createTestStudy() {
  try {
    const testStudy = {
      _type: 'peerReviewedStudy',
      title: 'Test Study',
      journal: 'Test Journal',
      publishDate: new Date().toISOString().split('T')[0],
      description: 'This is a test study to verify Sanity connection',
      slug: {
        current: 'test-study'
      },
      pdfFile: {
        _type: 'file',
        asset: {
          _ref: 'file-1234567890-pdf', // This will be replaced with actual file upload
          _type: 'reference'
        }
      }
    };

    const result = await client.create(testStudy);
    console.log('Created test study:', result);

  } catch (error) {
    console.error('Error creating test study:', error);
  }
}

createTestStudy();
