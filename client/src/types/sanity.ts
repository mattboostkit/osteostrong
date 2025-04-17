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
  excerpt?: string;
  body?: any; // This will be Portable Text content
  categories?: string[];
  author?: string;
  authorImage?: SanityImage;
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
}
