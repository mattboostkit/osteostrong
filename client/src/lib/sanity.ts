import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: '6ff7gi0z',
  dataset: 'production',
  apiVersion: '2023-05-03', // Use the latest API version
  token: 'skP4YDXDQGYItPY2NLG6FlED5V0natvf3J2tXapQJuTQR46m2t2u1GSly3hJSChbrrd82UqJLTCAhP5DZNnfqXs33ku2e8ziJXG02Lzf4GyrRbQUCTJex5dPT9Af0nbAke2ZnZmGJjweBDwxkvAe4ICeGusXf0e0p79GPpEumO3NrwxaxMHU', // Only needed if you want to update content
  useCdn: false, // Set to true for production
});

// Set up a helper function for generating image URLs with the Sanity image pipeline
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper function to fetch blog posts
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
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
      mainImage,
      publishedAt,
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
