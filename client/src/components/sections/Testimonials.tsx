import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    // Load the review widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our Members Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our members who have experienced remarkable improvements in their health and quality of life through OsteoStrong.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/25GDKnO5BPLQusVoo6yN"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%', height: '600px' }}
            title="OsteoStrong Member Reviews"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
