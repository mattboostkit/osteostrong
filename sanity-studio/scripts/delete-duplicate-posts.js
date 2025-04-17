// Script to delete duplicate blog posts in Sanity
const { createClient } = require('@sanity/client');

// Initialize the Sanity client
const client = createClient({
  projectId: '6ff7gi0z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: 'skP4YDXDQGYItPY2NLG6FlED5V0natvf3J2tXapQJuTQR46m2t2u1GSly3hJSChbrrd82UqJLTCAhP5DZNnfqXs33ku2e8ziJXG02Lzf4GyrRbQUCTJex5dPT9Af0nbAke2ZnZmGJjweBDwxkvAe4ICeGusXf0e0p79GPpEumO3NrwxaxMHU', // Replace with your token
  useCdn: false,
});

// Function to find and delete duplicate posts
async function deleteDuplicatePosts() {
  try {
    // Get all posts
    const posts = await client.fetch(`
      *[_type == "post"] {
        _id,
        title,
        slug,
        publishedAt
      } | order(publishedAt desc)
    `);

    console.log(`Found ${posts.length} total posts`);

    // Group posts by title
    const postsByTitle = {};
    posts.forEach(post => {
      if (!postsByTitle[post.title]) {
        postsByTitle[post.title] = [];
      }
      postsByTitle[post.title].push(post);
    });

    // Find titles with more than one post (duplicates)
    const titlesWithDuplicates = Object.keys(postsByTitle).filter(
      title => postsByTitle[title].length > 1
    );

    console.log(`Found ${titlesWithDuplicates.length} titles with duplicates`);

    // For each title with duplicates, keep the most recent one and delete the rest
    let deletedCount = 0;
    for (const title of titlesWithDuplicates) {
      const duplicates = postsByTitle[title];
      console.log(`Processing ${duplicates.length} duplicates for "${title}"`);
      
      // Sort by publishedAt in descending order (most recent first)
      duplicates.sort((a, b) => 
        new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0)
      );
      
      // Keep the first one (most recent), delete the rest
      const toKeep = duplicates[0];
      const toDelete = duplicates.slice(1);
      
      console.log(`Keeping post with ID: ${toKeep._id} (published: ${toKeep.publishedAt})`);
      
      for (const post of toDelete) {
        console.log(`Deleting duplicate post with ID: ${post._id} (published: ${post.publishedAt})`);
        await client.delete(post._id);
        deletedCount++;
      }
    }

    console.log(`Successfully deleted ${deletedCount} duplicate posts`);
  } catch (error) {
    console.error('Error deleting duplicate posts:', error);
  }
}

// Run the script
deleteDuplicatePosts();
