/// <reference types="vite/client" />

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityAssetDocument } from '@sanity/client';

// Get environment variables with hardcoded fallbacks
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '6ff7gi0z';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2023-05-03';

// Log configuration for debugging (remove in production)
if (!import.meta.env.VITE_SANITY_PROJECT_ID) {
  console.warn('VITE_SANITY_PROJECT_ID not found in environment, using default:', projectId);
}
if (!import.meta.env.VITE_SANITY_DATASET) {
  console.warn('VITE_SANITY_DATASET not found in environment, using default:', dataset);
}
// Token should only be included in secure environments
// No token in the client config for frontend/browser use!
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use the CDN for public, read-only queries (safe for production)
});

// Set up a helper function for generating image URLs with the Sanity image pipeline
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper function to get the full URL for a file asset (PDF, etc)
export function getFileUrl(asset: any) {
  if (!asset) {
    console.warn('No asset provided');
    return '';
  }

  // If the asset has a URL, use it directly
  if (asset.url) {
    console.log('Using direct URL:', asset.url);
    return asset.url;
  }

  // If the asset has a _ref, use the Sanity CDN
  if (asset._ref) {
    try {
      console.log('Processing asset reference:', asset._ref);
      
      // Extract file ID from reference
      const fileId = asset._ref.replace('file-', '').replace('.pdf', '');
      
      // Get the asset document
      const assetDoc = client.fetch(`*[_id == "${asset._ref}"]`);
      
      // Construct the Sanity CDN URL
      const url = `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}.pdf`;
      console.log('Generated CDN URL:', url);
      return url;
    } catch (error) {
      console.error('Error processing asset reference:', error);
      return '';
    }
  }

  // If the asset has a path property (for local development)
  if (asset.path) {
    console.log('Using local path:', asset.path);
    return asset.path;
  }

  console.warn('Unsupported asset format:', asset);
  return '';
}

// Helper function to fetch blog posts
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage { asset, alt, crop, hotspot },
      publishedAt,
      excerpt,
      "categories": categories[]->title,
      "author": author->name
    }
  `);
}

// Helper function to fetch a single blog post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage { asset, alt, crop, hotspot },
      publishedAt,
      _updatedAt,
      body,
      "categories": categories[]->title,
      "author": author->name,
      "authorImage": author->image
    }
  `, { slug });
}

// Helper function to fetch blog categories
export async function getCategories() {
  return client.fetch(`
    *[_type == "category"] {
      _id,
      title,
      description
    }
  `);
}

// Helper function to fetch the site logo
export async function getSiteLogo() {
  return client.fetch(`
    *[_type == "siteLogo"][0] {
      title,
      mainLogo,
      altLogo,
      favicon
    }
  `);
}

// Helper function to fetch images from a specific gallery
export async function getGalleryImages(galleryTitle: string) {
  return client.fetch(`
    *[_type == "imageGallery" && title == $galleryTitle][0] {
      title,
      description,
      "images": images[] {
        "url": asset->url,
        "metadata": asset->metadata,
        alt,
        caption,
        category
      }
    }
  `, { galleryTitle });
}

// Helper function to fetch all galleries
export async function getAllGalleries() {
  return client.fetch(`
    *[_type == "imageGallery"] {
      _id,
      title,
      description,
      "imageCount": count(images)
    }
  `);
}

// Helper function to fetch site images by category
export async function getSiteImagesByCategory(category: string) {
  return client.fetch(`
    *[_type == "siteImage" && category == $category] {
      _id,
      title,
      image,
      alt,
      description
    }
  `, { category });
}

// Helper function to fetch all site images
export async function getAllSiteImages() {
  return client.fetch(`
    *[_type == "siteImage"] {
      _id,
      title,
      image,
      alt,
      category,
      description
    }
  `);
}

// Helper function to fetch team members
export async function getTeamMembers() {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      position,
      image,
      bio,
      order,
      socialLinks
    }
  `);
}

// Helper function to fetch facility gallery
export async function getFacilityGallery() {
  return client.fetch(`
    *[_type == "facilityGallery"][0] {
      _id,
      title,
      description,
      images[] {
        _key,
        alt,
        caption,
        area,
        asset
      }
    }
  `);
}

// Helper function to fetch services
export async function getServices() {
  return client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      image,
      features,
      order,
      ctaText,
      ctaLink
    }
  `);
}

// Helper function to fetch testimonials
export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      location,
      quote,
      image,
      video,
      videoThumbnail,
      featured,
      order
    }
  `);
}

// Helper function to fetch featured testimonial
export async function getFeaturedTestimonial() {
  return client.fetch(`
    *[_type == "testimonial" && featured == true][0] {
      _id,
      name,
      location,
      quote,
      image,
      video,
      videoThumbnail
    }
  `);
}

// Helper function to fetch page images by page and section
export async function getPageImage(page: string, section: string) {
  return client.fetch(`
    *[_type == "pageImage" && page == $page && section == $section][0] {
      _id,
      title,
      page,
      section,
      image,
      alt,
      description
    }
  `, { page, section });
}

// Helper function to fetch all images for a specific page
export async function getPageImages(page: string) {
  const query = `*[_type == "pageImage" && page == $page] | order(_createdAt desc) {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    "alt": image.alt,
    page,
    section,
    _createdAt
  }`;
  return client.fetch(query, { page });
}

// Helper function to fetch study page images
export async function getStudyPageImages() {
  try {
    // Fetch all study page images at once using the 'about' page with specific section identifiers
    const [boneDensity, strengthGain, balance, diabetes] = await Promise.all([
      getPageImage('about', 'study-bone-density'),
      getPageImage('about', 'study-strength-gain'),
      getPageImage('about', 'study-balance'),
      getPageImage('about', 'study-diabetes')
    ]);

    return {
      boneDensityImage: boneDensity?.image,
      strengthGainImage: strengthGain?.image,
      balanceImage: balance?.image,
      diabetesImage: diabetes?.image
    };
  } catch (error) {
    console.error('Error fetching study page images:', error);
    return {
      boneDensityImage: null,
      strengthGainImage: null,
      balanceImage: null,
      diabetesImage: null
    };
  }
}
