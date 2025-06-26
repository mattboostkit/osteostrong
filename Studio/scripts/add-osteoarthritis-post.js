// Script to create the osteoarthritis blog post in Sanity
const { createClient } = require('@sanity/client');
const config = require('./config');

// Initialize the Sanity client
const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  token: config.token,
  useCdn: config.useCdn,
});

// Function to create a slug from a title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Blog post data
const blogPost = {
  title: 'Osteoarthritis & Osteopenia Help in Kent: Medicine-Free Solutions in Tunbridge Wells, Tonbridge & Sevenoaks',
  slug: createSlug('Osteoarthritis & Osteopenia Help in Kent: Medicine-Free Solutions in Tunbridge Wells, Tonbridge & Sevenoaks'),
  excerpt: 'Discover medicine-free, drug-free solutions for osteoarthritis and osteopenia in Kent. Learn how OsteoStrong Tunbridge Wells helps people in Tonbridge, Sevenoaks, and beyond improve bone health and mobility naturally.',
  body: [
    {
      _type: 'block',
      style: 'normal',
      _key: 'intro',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'intro.1',
          text: 'Are you or a loved one struggling with osteoarthritis or osteopenia in Kent? You\'re not alone. These common bone and joint conditions affect thousands of people across Tunbridge Wells, Tonbridge, Sevenoaks, and the wider Kent area. If you\'re searching for medicine-free, drug-free ways to improve your bone health, reduce pain, and regain mobility, OsteoStrong Tunbridge Wells is here to help.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'what-are',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'what-are.1',
          text: 'What Are Osteoarthritis and Osteopenia?',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'what-are-body',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'what-are-body.1',
          text: 'Osteoarthritis is a degenerative joint condition that causes pain, stiffness, and reduced mobility. It\'s the most common form of arthritis, often affecting knees, hips, hands, and the spine—especially as we age.\n\nOsteopenia refers to lower-than-normal bone density, which increases the risk of developing osteoporosis and suffering fractures. Many adults over 50 are affected, often without realizing it until a bone scan or injury reveals the problem.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'why-medicine-free',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'why-medicine-free.1',
          text: 'Why Choose Medicine-Free, Drug-Free Solutions?',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'why-medicine-free-body',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'why-medicine-free-body.1',
          text: 'While medications can help manage symptoms, many people are concerned about long-term side effects or simply want a more natural approach. Medicine-free, drug-free solutions empower you to take control of your bone and joint health without relying solely on pharmaceuticals. These approaches focus on prevention, strengthening, and holistic wellness—helping you feel your best at any age.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'how-osteostrong',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'how-osteostrong.1',
          text: 'How OsteoStrong Works',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'how-osteostrong-body',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'how-osteostrong-body.1',
          text: 'OsteoStrong offers a revolutionary, non-invasive system called osteogenic loading. This science-backed method uses specialized equipment to safely apply controlled pressure to your bones and joints, stimulating your body\'s natural bone-building and strengthening processes.\n\n- Sessions are quick: Just 15 minutes, once a week.\n- Guided by experts: Every session is supervised by a trained coach.\n- Safe for all ages: Suitable for people with osteopenia, osteoarthritis, or anyone wanting to improve bone health.\n- No drugs or surgery: 100% medicine-free and drug-free.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'real-results',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'real-results.1',
          text: 'Real Results: Success Stories from Kent',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'real-results-body',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'real-results-body.1',
          text: 'Many of our members from Tunbridge Wells, Tonbridge, Sevenoaks, and across Kent have experienced life-changing improvements:',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'blockquote',
      _key: 'testimonial1',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'testimonial1.1',
          text: '"After just a few months at OsteoStrong, my knee pain from osteoarthritis has reduced dramatically. I\'m walking further and feeling stronger every week." — J.S., Tonbridge',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'blockquote',
      _key: 'testimonial2',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'testimonial2.1',
          text: '"My bone density scan showed osteopenia last year. Since starting OsteoStrong, my follow-up scan showed improvement, and I feel more confident in my balance and mobility." — M.L., Sevenoaks',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'serving-kent',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'serving-kent.1',
          text: 'Serving the Kent Community',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'serving-kent-body',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'serving-kent-body.1',
          text: 'OsteoStrong Tunbridge Wells is proud to serve clients from all over Kent, including Tonbridge and Sevenoaks. Our convenient location, welcoming team, and personalized programs make it easy to start your journey to better bone health—without medication.\n\n- Free first session: Try OsteoStrong with no obligation.\n- Personalized approach: We tailor every program to your needs and goals.\n- Support at every step: Our coaches are here to guide and encourage you.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'faq',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'faq.1',
          text: 'Frequently Asked Questions',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'faq-body',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'faq-body.1',
          text: 'Can OsteoStrong help with osteoarthritis pain?\nYes! Many members with osteoarthritis report reduced pain, improved joint function, and greater mobility after regular sessions.\n\nIs it safe for people with osteopenia?\nAbsolutely. OsteoStrong is designed to safely support people with low bone density and help prevent further bone loss.\n\nDo I need a doctor\'s referral?\nNo referral is needed, but we\'re happy to work with your healthcare provider if you wish.\n\nHow soon will I see results?\nMany members notice improvements in strength, balance, and pain within a few weeks. Bone density changes are typically seen after several months.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'cta',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'cta.1',
          text: 'Take the First Step Toward Stronger Bones—Naturally',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'cta-body',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'cta-body.1',
          text: 'If you\'re looking for medicine-free, drug-free help for osteoarthritis or osteopenia in Kent, OsteoStrong Tunbridge Wells is ready to support you. Book your free session today and discover a new way to build strength, reduce pain, and reclaim your active life.\n\nBook Your Free Session: https://www.osteostrongtw.co.uk/booknow\nContact Us: https://www.osteostrongtw.co.uk/contact',
          marks: [],
        },
      ],
    },
  ],
  metaDescription: 'Discover medicine-free, drug-free solutions for osteoarthritis and osteopenia in Kent. Learn how OsteoStrong Tunbridge Wells helps people in Tonbridge, Sevenoaks, and beyond improve bone health and mobility naturally.',
  keywords: [
    'osteoarthritis help Kent',
    'osteopenia support Kent',
    'medicine-free bone health',
    'drug-free osteoarthritis solution',
    'Tunbridge Wells',
    'Tonbridge',
    'Sevenoaks',
    'OsteoStrong',
    'natural bone health',
    'non-pharmaceutical joint pain relief'
  ],
  featured: true
};

// Function to create the blog post
async function createBlogPost() {
  try {
    // Check if a post with this title already exists
    const existingPostQuery = `*[_type == "post" && title == "${blogPost.title}"][0]._id`;
    const existingPostId = await client.fetch(existingPostQuery);

    if (existingPostId) {
      console.log(`Post with title "${blogPost.title}" already exists. Skipping.`);
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
    const post = {
      _type: 'post',
      title: blogPost.title,
      slug: {
        _type: 'slug',
        current: blogPost.slug
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
      body: blogPost.body,
      excerpt: blogPost.excerpt,
      metaDescription: blogPost.metaDescription,
      keywords: blogPost.keywords,
      featured: blogPost.featured
    };

    const result = await client.create(post);
    console.log(`Created blog post: ${blogPost.title}`);
    console.log('Author: OsteoStrong Team');
    return result;
  } catch (error) {
    console.error(`Error creating blog post "${blogPost.title}":`, error);
    throw error;
  }
}

// Run the script
createBlogPost(); 