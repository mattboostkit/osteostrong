import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const BookNow = () => {
  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);

    // Meta Pixel InitiateCheckout Event
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Free OsteoStrong Session',
        content_category: 'Health Service',
        value: 185.00,
        currency: 'GBP'
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Book A Free Session | OsteoStrong Tunbridge Wells</title>
        <meta name="description" content="Book your free OsteoStrong session today in Tunbridge Wells. Take the first step towards stronger bones, improved balance and overall health. Save £160 this summer!" />
        <meta name="keywords" content="book osteostrong session, free consultation tunbridge wells, bone density test, osteoporosis treatment booking, strength training appointment" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/booknow" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Book A Free Session | OsteoStrong Tunbridge Wells" />
        <meta property="og:description" content="Book your free OsteoStrong session today in Tunbridge Wells. Take the first step towards stronger bones, improved balance and overall health. Save £160 this summer!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/booknow" />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book A Free Session | OsteoStrong Tunbridge Wells" />
        <meta name="twitter:description" content="Book your free OsteoStrong session today in Tunbridge Wells. Take the first step towards stronger bones and improved overall health." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/og-image.jpg" />
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="py-10 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">Book Your Free Consultation Call</h1>
          <p className="text-xl text-black">Get a free assessment to understand your needs before booking your OsteoStrong trial session</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-neutral-100 rounded-xl p-8">
            {/* Calendly inline widget begin */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/consultation-osteostrong" style={{minWidth: '320px', height: '700px'}}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            {/* Calendly inline widget end */}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-black mb-6">What to Expect in Your First Session</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user-md text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personal consultation</h3>
                  <p className="text-gray-600">Discuss your goals and get expert advice tailored to you.</p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-dumbbell text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Introduction to the 4 core machines</h3>
                  <p className="text-gray-600">Experience each of our unique OsteoStrong machines first-hand.</p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-bone text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bone strength baseline measurement</h3>
                  <p className="text-gray-600">Find out your starting point with a quick, non-invasive test.</p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-stopwatch text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">All in under 30 minutes</h3>
                  <p className="text-gray-600">Your first session is fast, friendly, and efficient.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Where We Are Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-black mb-6">Where We Are</h2>
            <div className="rounded-xl overflow-hidden shadow-md" style={{ minHeight: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5007.767539208316!2d0.27160002735648064!3d51.129051923043235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df450670a1fda1%3A0x807a08d1da3636b1!2sOsteoStrong%20Tunbridge%20Wells!5e0!3m2!1sen!2suk!4v1749113864269!5m2!1sen!2suk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OsteoStrong Tunbridge Wells Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
