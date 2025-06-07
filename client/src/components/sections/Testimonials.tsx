import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
  const [iframeHeight, setIframeHeight] = useState(800);
  const [iframeLoaded, setIframeLoaded] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Initialize the widget script
  useEffect(() => {
    // Create a script element for the ReputationHub widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    script.defer = true;
    script.id = 'reputation-hub-script';

    // Handle script load event
    script.onload = () => {
      console.log('ReputationHub widget script loaded successfully');
      setIframeLoaded(true);
    };

    // Handle script error event
    script.onerror = () => {
      console.error('Failed to load ReputationHub widget script');
      setIframeLoaded(false);
    };

    // Add the script to the document
    document.head.appendChild(script);

    // Clean up function
    return () => {
      // Remove the script when component unmounts
      const scriptElement = document.getElementById('reputation-hub-script');
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  useEffect(() => {
    // Function to adjust iframe height based on content
    const adjustIframeHeight = () => {
      // Set different heights based on screen width
      if (window.innerWidth < 640) { // Mobile
        setIframeHeight(1200);
      } else if (window.innerWidth < 1024) { // Tablet
        setIframeHeight(1000);
      } else { // Desktop
        setIframeHeight(800);
      }
    };

    // Initial adjustment
    adjustIframeHeight();

    // Add resize listener
    window.addEventListener('resize', adjustIframeHeight);

    // Set a timeout to check if the widget loaded properly
    const timeoutId = setTimeout(() => {
      // If the iframe hasn't loaded properly after 8 seconds, show fallback
      if (iframeRef.current && !iframeRef.current.contentWindow) {
        setIframeLoaded(false);
      }
    }, 8000);

    // Cleanup
    return () => {
      window.removeEventListener('resize', adjustIframeHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIframeLoaded(true);
    // Add a small delay to ensure content is fully loaded
    setTimeout(() => {
      if (iframeRef.current) {
        try {
          // Try to get the content height if possible
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
          if (iframeDoc && iframeDoc.body) {
            const contentHeight = iframeDoc.body.scrollHeight;
            if (contentHeight > 200) { // Ensure we have a reasonable height
              setIframeHeight(contentHeight + 50); // Add padding
            }
          }
        } catch (e) {
          // If we can't access the iframe content due to CORS, use the default height
          console.log('Could not access iframe content, using default height');
        }
      }
    }, 1000);
  };

  // Handle iframe error
  const handleIframeError = () => {
    setIframeLoaded(false);
    console.error('Failed to load the reviews widget');
  };

  return (
    <section id="testimonials" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our Members Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our members who have experienced remarkable improvements in their health and quality of life through OsteoStrong.
          </p>
        </div>

        <div className="max-w-6xl mx-auto testimonials-widget-container">
          {iframeLoaded ? (
            <iframe
              ref={iframeRef}
              className="lc_reviews_widget w-full"
              src="https://reputationhub.site/reputation/widgets/review_widget/25GDKnO5BPLQusVoo6yN"
              frameBorder="0"
              scrolling="no"
              style={{
                width: '100%',
                height: `${iframeHeight}px`,
                border: 'none',
                overflow: 'hidden'
              }}
              title="OsteoStrong Member Reviews"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="eager"
            ></iframe>
          ) : (
            <div className="p-8 text-center bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Our Members Love OsteoStrong</h3>
              <p className="mb-4">We have a 5.0 rating from 34 reviews</p>
              <p>Our members report significant improvements in strength, bone health, and overall wellbeing.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
