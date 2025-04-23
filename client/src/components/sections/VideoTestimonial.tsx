import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ScrollLink from "@/components/utils/ScrollLink";
import { getFeaturedTestimonial, urlFor } from "@/lib/sanity";

// Fallback testimonial data if Sanity data is not available
const fallbackTestimonial = {
  name: "Lesley Bingham",
  location: "Tunbridge Wells",
  quote: "I was diagnosed with Osteoporosis and six fractured vertebrae...but since finding OsteoStrong I haven't looked back and have just returned from skiing. I absolutely endorse OsteoStrong",
  videoUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Testimonial.mp4"
};

// Type definition for a testimonial
type Testimonial = {
  _id?: string;
  name: string;
  location: string;
  quote: string;
  image?: any; // Sanity image reference
  video?: any; // Sanity file reference
  videoThumbnail?: any; // Sanity image reference
  videoUrl?: string; // Direct video URL for fallback
};

const VideoTestimonial = () => {
  const [testimonial, setTestimonial] = useState<Testimonial>(fallbackTestimonial);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch testimonial data from Sanity
  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const result = await getFeaturedTestimonial();
        console.log('Featured testimonial from Sanity:', result);

        if (result) {
          setTestimonial({
            _id: result._id,
            name: result.name,
            location: result.location,
            quote: result.quote,
            image: result.image,
            video: result.video,
            videoThumbnail: result.videoThumbnail
          });
        } else {
          console.log('No featured testimonial found in Sanity, using fallback');
          setTestimonial(fallbackTestimonial);
        }
      } catch (error) {
        console.error("Error fetching testimonial from Sanity:", error);
        setTestimonial(fallbackTestimonial);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonial();
  }, []);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Set a timeout for video loading
    const timeoutId = setTimeout(() => {
      if (!isVideoLoaded) {
        setHasVideoError(true);
        console.warn('Video loading timed out after 10 seconds');
      }
    }, 10000); // 10 seconds timeout

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
  }, [isVideoLoaded]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    setHasVideoError(true);
    console.error('Failed to load video testimonial');
  };

  // Get video URL from Sanity or fallback
  const getVideoUrl = () => {
    if (testimonial.video && testimonial.video.asset && testimonial.video.asset._ref) {
      // Sanity file URL format
      return `https://cdn.sanity.io/files/${import.meta.env.VITE_SANITY_PROJECT_ID || '6ff7gi0z'}/${import.meta.env.VITE_SANITY_DATASET || 'production'}/${testimonial.video.asset._ref.replace('file-', '').replace('-mp4', '.mp4')}`;
    }
    return testimonial.videoUrl || fallbackTestimonial.videoUrl;
  };

  return (
    <section id="video-testimonial" className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Hear From Our Members</h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Watch how OsteoStrong has transformed the lives of our members, improving their strength, mobility, and overall quality of life.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl">
            <div className="aspect-portrait-video video-container-portrait relative">
              {!isVideoLoaded && !hasVideoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="rounded-full h-16 w-16 bg-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="mt-4 text-gray-700 font-medium">Loading video...</p>
                  </div>
                </div>
              )}
              {hasVideoError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 p-6">
                  <div className="text-center">
                    <div className="rounded-full h-16 w-16 bg-red-500 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Video Unavailable</h3>
                    <p className="text-gray-600 mb-4">Please check back later to watch our member testimonials.</p>
                    <ScrollLink href="/booknow">
                      <Button className="bg-white hover:bg-neutral-100 text-black font-bold py-2 px-4 rounded-full transition shadow-md">
                        Book A Free Session
                      </Button>
                    </ScrollLink>
                  </div>
                </div>
              ) : (
                <video
                  className="video-player-portrait"
                  src={getVideoUrl()}
                  title={`${testimonial.name} Testimonial`}
                  controls
                  playsInline
                  preload="auto"
                  poster="https://ik.imagekit.io/boostkit/OsteoStrong/Testimonial.mp4/ik-thumbnail.jpg"
                  onLoadedData={handleVideoLoad}
                  onError={handleVideoError}
                  width="480"
                  height="854"
                ></video>
              )}
            </div>

            <div className="mt-8 text-center">
              {testimonial.image && testimonial.image.asset && testimonial.image.asset._ref && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={urlFor(testimonial.image).width(200).height(200).url()}
                    alt={testimonial.name}
                    className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg"
                  />
                </div>
              )}
              <p className="text-lg font-medium text-black">
                "{testimonial.quote}"
              </p>
              <p className="text-black mt-2 mb-6">{testimonial.name}<br />{testimonial.location}</p>

              <ScrollLink href="/booknow">
                <Button className="bg-white hover:bg-neutral-100 text-black font-bold py-3 px-8 rounded-full transition shadow-md">
                  Book A Free Session
                </Button>
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonial;
