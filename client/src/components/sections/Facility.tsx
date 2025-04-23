import { useState, useEffect } from "react";
import { getFacilityGallery, urlFor } from "@/lib/sanity";

interface FacilityImage {
  _key: string;
  alt: string;
  caption?: string;
  area?: string;
  asset: {
    _ref: string;
  };
  imageUrl?: string; // Direct URL for fallback images
}

interface FacilityGallery {
  _id: string;
  title: string;
  description?: string;
  images: FacilityImage[];
}

const Facility = () => {
  const [facilityGallery, setFacilityGallery] = useState<FacilityGallery | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFacilityGallery = async () => {
      try {
        const result = await getFacilityGallery();
        console.log('Facility gallery from Sanity:', result);

        if (result && result.images && result.images.length > 0) {
          setFacilityGallery(result);
        } else {
          console.log('No facility images found in Sanity, using fallback images');
        }
      } catch (error) {
        console.error("Error fetching facility gallery from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFacilityGallery();
  }, []);

  // Fallback images if none are found in Sanity
  const fallbackImages = [
    {
      _key: "1",
      alt: "OsteoStrong Reception Area",
      caption: "Our welcoming reception area",
      area: "reception",
      asset: { _ref: "" },
      imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Reception.jpg?updatedAt=1745332554535"
    },
    {
      _key: "2",
      alt: "OsteoStrong Training Equipment",
      caption: "State-of-the-art OsteoStrong equipment",
      area: "equipment",
      asset: { _ref: "" },
      imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Equipment.jpg?updatedAt=1745332554478"
    },
    {
      _key: "3",
      alt: "OsteoStrong Downstairs Area",
      caption: "Downstairs",
      area: "downstairs",
      asset: { _ref: "" },
      imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Downstairs.jpg?updatedAt=1745332554288"
    }
  ];

  const displayImages = facilityGallery?.images?.length > 0
    ? facilityGallery.images
    : fallbackImages;

  // Log the images for debugging
  console.log('Facility images to display:', displayImages);

  return (
    <section id="facility" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Facility</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {facilityGallery?.description ||
              "Take a look inside our state-of-the-art OsteoStrong centre in Tunbridge Wells, equipped with the latest technology to help you achieve optimal bone and muscle health."}
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayImages.map((image) => (
              <div key={image._key} className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-200">
                <div className="relative h-64 bg-neutral-200">
                  {image.imageUrl ? (
                    <img
                      src={image.imageUrl}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image.imageUrl}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : image.asset._ref ? (
                    <img
                      src={urlFor(image).width(600).height(400).url()}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        console.error(`Failed to load Sanity image for: ${image.alt}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-neutral-400 mt-2">Facility Photo</span>
                    </div>
                  )}
                  {image.area && (
                    <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
                      {image.area.charAt(0).toUpperCase() + image.area.slice(1)}
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white text-center">
                  <p className="text-gray-700 font-medium">
                    {image.caption ||
                     (image.area === 'reception' ? 'Our welcoming reception area' :
                      image.area === 'equipment' ? 'State-of-the-art OsteoStrong equipment' :
                      image.area === 'downstairs' ? 'Downstairs' :
                      'OsteoStrong Facility')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Facility;
