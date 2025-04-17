// Script to create blog posts in Sanity
const { createClient } = require('@sanity/client');

// Initialize the Sanity client
const client = createClient({
  projectId: '6ff7gi0z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: 'skP4YDXDQGYItPY2NLG6FlED5V0natvf3J2tXapQJuTQR46m2t2u1GSly3hJSChbrrd82UqJLTCAhP5DZNnfqXs33ku2e8ziJXG02Lzf4GyrRbQUCTJex5dPT9Af0nbAke2ZnZmGJjweBDwxkvAe4ICeGusXf0e0p79GPpEumO3NrwxaxMHU', // Replace with your token
  useCdn: false,
});

// Function to create a slug from a title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Blog post data
const blogPosts = [
  {
    title: 'Meet the biohacker',
    slug: createSlug('Meet the biohacker'),
    excerpt: 'Discover how biohacking techniques can help improve bone density and overall health.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        _key: '1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '1.1',
            text: 'Biohacking is all about making small, incremental changes to your body, diet, and lifestyle to improve your health and wellbeing. In this article, we explore how biohacking techniques can be applied to improve bone density and overall skeletal health.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '2.1',
            text: 'What is Biohacking?',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '3.1',
            text: 'Biohacking refers to the practice of making changes to your lifestyle in order to "hack" your body\'s biology and improve your health, wellbeing, and performance. These changes can be as simple as adopting a new diet or exercise routine, or as complex as using technology to track and analyze your body\'s data.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '4',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '4.1',
            text: 'Biohacking for Bone Health',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '5.1',
            text: 'When it comes to bone health, biohacking can involve various strategies such as optimizing nutrition, incorporating specific exercises, and using technology like OsteoStrong to stimulate bone growth. By applying these biohacking principles, you can take a proactive approach to maintaining and improving your skeletal strength.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    title: 'What You Need to Know About Osteoporosis Drugs',
    slug: createSlug('What You Need to Know About Osteoporosis Drugs'),
    excerpt: 'Understanding the benefits, risks, and alternatives to conventional osteoporosis medications.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        _key: '1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '1.1',
            text: 'Osteoporosis medications are commonly prescribed to help slow bone loss and reduce fracture risk. However, it\'s important to understand both their benefits and potential side effects, as well as alternative approaches to maintaining bone health.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '2.1',
            text: 'Common Osteoporosis Medications',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '3.1',
            text: 'There are several classes of medications used to treat osteoporosis, including bisphosphonates, hormone-related therapy, and biologics. Each works differently and comes with its own set of potential benefits and risks.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '4',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '4.1',
            text: 'Natural Alternatives',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '5.1',
            text: 'For those looking for non-pharmaceutical approaches, options like OsteoStrong offer a natural way to stimulate bone growth through osteogenic loading. This approach works with your body\'s natural processes to build stronger bones without the potential side effects of medications.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Unveiling The Secrets of Bone Density',
    slug: createSlug('Unveiling The Secrets of Bone Density'),
    excerpt: 'Explore the science behind bone density and how you can naturally improve it.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        _key: '1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '1.1',
            text: 'Bone density is a key indicator of skeletal health, yet many people don\'t fully understand how it works or how to improve it. In this article, we delve into the science of bone density and reveal natural strategies to enhance it.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '2.1',
            text: 'Understanding Bone Remodeling',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '3.1',
            text: 'Bones are living tissue that constantly undergo a process called remodeling. This involves the removal of old bone tissue and the formation of new bone. The balance between these two processes determines your overall bone density.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '4',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '4.1',
            text: 'The Role of Mechanical Stress',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '5.1',
            text: 'One of the most effective ways to increase bone density is through mechanical stress. When bones are subjected to appropriate levels of pressure, they respond by becoming stronger and denser. This is the principle behind osteogenic loading, which is utilized in the OsteoStrong program.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Not knowing your bone density score is like not knowing your weight',
    slug: createSlug('Not knowing your bone density score is like not knowing your weight'),
    excerpt: 'Why bone density testing is crucial for monitoring your skeletal health.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        _key: '1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '1.1',
            text: 'Most people regularly monitor their weight, blood pressure, and other health metrics, but bone density often goes unchecked. This oversight can have serious consequences for long-term health and mobility.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '2.1',
            text: 'The Importance of Bone Density Testing',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '3.1',
            text: 'Bone density testing, or DEXA scanning, provides valuable information about your skeletal health. It can identify osteopenia or osteoporosis before fractures occur, allowing for early intervention and prevention strategies.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '4',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '4.1',
            text: 'When Should You Get Tested?',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '5.1',
            text: 'Women over 65 and men over 70 should have regular bone density tests. However, those with risk factors such as family history, certain medications, or medical conditions may need testing earlier. At OsteoStrong, we can help you understand your bone health and develop a plan to improve it.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Getting Stronger',
    slug: createSlug('Getting Stronger'),
    excerpt: 'Discover how OsteoStrong can help you build strength at any age.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        _key: '1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '1.1',
            text: 'Strength isn\'t just for athletes or the young. It\'s a fundamental aspect of health that becomes increasingly important as we age. At OsteoStrong, we believe that everyone can and should get stronger, regardless of their age or current fitness level.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '2.1',
            text: 'The Benefits of Strength',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '3.1',
            text: 'Increased strength leads to improved balance, reduced risk of falls, greater mobility, and enhanced overall quality of life. It also helps protect against age-related muscle loss (sarcopenia) and bone loss (osteoporosis).',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '4',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '4.1',
            text: 'The OsteoStrong Approach',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '5.1',
            text: 'OsteoStrong\'s unique approach to strength building focuses on osteogenic loading, which triggers your body\'s natural adaptive response. In just one 10-minute session per week, you can significantly increase your strength without the sweat, strain, or time commitment of traditional exercise.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Are your bones out of sight out of mind?',
    slug: createSlug('Are your bones out of sight out of mind'),
    excerpt: 'Why we need to pay more attention to our skeletal health before problems arise.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        _key: '1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '1.1',
            text: 'We often don\'t think about our bones until something goes wrong. Unlike skin or muscles, bones are hidden from view, making it easy to neglect their health until problems like fractures or osteoporosis emerge.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '2.1',
            text: 'The Silent Decline',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '3.1',
            text: 'Bone loss occurs gradually and without symptoms, often called the "silent disease." By the time many people discover they have osteoporosis, they\'ve already lost significant bone mass and experienced fractures.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '4',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '4.1',
            text: 'Proactive Bone Health',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: '5.1',
            text: 'Taking a proactive approach to bone health is essential. This includes regular bone density testing, proper nutrition, and targeted exercise like the osteogenic loading provided by OsteoStrong. By making your bones a priority now, you can prevent problems later and maintain your independence and mobility as you age.',
            marks: [],
          },
        ],
      },
    ],
  },
];

// Function to create a blog post
async function createBlogPost(post) {
  try {
    // Check if a post with this title already exists
    const existingPostQuery = `*[_type == "post" && title == "${post.title}"][0]._id`;
    const existingPostId = await client.fetch(existingPostQuery);

    if (existingPostId) {
      console.log(`Post with title "${post.title}" already exists. Skipping.`);
      return null;
    }

    // First, check if we need to create an author
    let authorId;
    const authorQuery = '*[_type == "author" && name == "OsteoStrong Team"][0]._id';
    const existingAuthorId = await client.fetch(authorQuery);

    if (existingAuthorId) {
      authorId = existingAuthorId;
    } else {
      // Create a new author
      const author = await client.create({
        _type: 'author',
        name: 'OsteoStrong Team',
        slug: {
          _type: 'slug',
          current: 'osteostrong-team'
        }
      });
      authorId = author._id;
    }

    // Check if we need to create a category
    let categoryId;
    const categoryQuery = '*[_type == "category" && title == "Bone Health"][0]._id';
    const existingCategoryId = await client.fetch(categoryQuery);

    if (existingCategoryId) {
      categoryId = existingCategoryId;
    } else {
      // Create a new category
      const category = await client.create({
        _type: 'category',
        title: 'Bone Health',
        description: 'Articles about bone health, osteoporosis, and skeletal strength'
      });
      categoryId = category._id;
    }

    // Create the blog post
    const blogPost = {
      _type: 'post',
      title: post.title,
      slug: {
        _type: 'slug',
        current: post.slug
      },
      author: {
        _type: 'reference',
        _ref: authorId
      },
      categories: [
        {
          _type: 'reference',
          _ref: categoryId
        }
      ],
      publishedAt: new Date().toISOString(),
      body: post.body
    };

    const result = await client.create(blogPost);
    console.log(`Created blog post: ${post.title}`);
    return result;
  } catch (error) {
    console.error(`Error creating blog post "${post.title}":`, error);
    throw error;
  }
}

// Create all blog posts
async function createAllBlogPosts() {
  try {
    for (const post of blogPosts) {
      await createBlogPost(post);
    }
    console.log('All blog posts created successfully!');
  } catch (error) {
    console.error('Error creating blog posts:', error);
  }
}

// Run the script
createAllBlogPosts();
