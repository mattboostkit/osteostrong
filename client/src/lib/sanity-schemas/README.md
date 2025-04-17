# Sanity CMS Integration

This folder contains schema definitions for the Sanity CMS integration. These schemas define the structure of content that can be managed in the Sanity Studio.

## Available Schemas

### 1. Site Logo (`logo.ts`)

This schema allows you to manage the site's logo:

- **Main Logo**: The primary logo used across the site
- **Alternative Logo**: An alternative version (e.g., for dark backgrounds)
- **Favicon**: The site favicon shown in browser tabs

### 2. Image Gallery (`imageGallery.ts`)

This schema allows you to create collections of images:

- Create multiple galleries with different themes
- Add captions and alt text to images
- Categorize images for different sections of the site

### 3. Site Images (`siteImage.ts`)

This schema allows you to manage individual images that can be used across the site:

- Upload and organize images by category
- Add descriptive metadata for accessibility
- Reuse images across different parts of the site

## How to Use

### Setting Up in Sanity Studio

1. Add these schema files to your Sanity Studio project
2. Import and register the schemas in your `schema.js` file:

```javascript
// Import schemas
import siteLogo from './schemas/siteLogo'
import imageGallery from './schemas/imageGallery'
import siteImage from './schemas/siteImage'

// Register schemas
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    siteLogo,
    imageGallery,
    siteImage,
    // ... other schemas
  ]),
})
```

### Using in Your React Application

The Sanity client in `client/src/lib/sanity.ts` includes helper functions for fetching:

- `getSiteLogo()` - Fetches the site logo
- `getGalleryImages(galleryTitle)` - Fetches images from a specific gallery
- `getAllGalleries()` - Fetches all image galleries
- `getSiteImagesByCategory(category)` - Fetches site images by category
- `getAllSiteImages()` - Fetches all site images

## Example Usage

```jsx
import { useEffect, useState } from 'react';
import { getSiteImagesByCategory, urlFor } from '@/lib/sanity';

const HeroSection = () => {
  const [heroImages, setHeroImages] = useState([]);
  
  useEffect(() => {
    const fetchImages = async () => {
      const images = await getSiteImagesByCategory('hero');
      setHeroImages(images);
    };
    
    fetchImages();
  }, []);
  
  return (
    <div className="hero-section">
      {heroImages.map(image => (
        <img 
          key={image._id}
          src={urlFor(image.image).width(1200).url()}
          alt={image.alt}
        />
      ))}
    </div>
  );
};
```
