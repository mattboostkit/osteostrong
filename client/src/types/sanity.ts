export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  crop?: {
    _type: 'sanity.imageCrop';
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  alt?: string; // Optional alt text for the image
  hotspot?: {
    _type: 'sanity.imageHotspot';
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: SanityImage;
  publishedAt: string;
  _updatedAt?: string; // For dateModified in schema
  excerpt?: string;
  body?: any; // This will be Portable Text content
  categories?: string[];
  author?: { name: string }; // Changed from string to object
  authorImage?: SanityImage;
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
}
