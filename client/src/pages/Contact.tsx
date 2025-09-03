import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Contact Us | OsteoStrong Tunbridge Wells</title>
        <meta name="description" content="Get in touch with OsteoStrong Tunbridge Wells. We're here to answer your questions and help you begin your journey to stronger bones and better health." />
        <meta name="keywords" content="OsteoStrong contact, Tunbridge Wells location, bone health questions, book session, osteogenic loading inquiry" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/contact" />
        <meta property="og:title" content="Contact Us | OsteoStrong Tunbridge Wells" />
        <meta property="og:description" content="Get in touch with OsteoStrong Tunbridge Wells. We're here to answer your questions and help you begin your journey to stronger bones and better health." />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/contact" />
        <meta name="twitter:title" content="Contact Us | OsteoStrong Tunbridge Wells" />
        <meta name="twitter:description" content="Get in touch with OsteoStrong Tunbridge Wells. We're here to answer your questions and help you begin your journey to stronger bones and better health." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Contact Us</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Have questions or ready to start your OsteoStrong journey? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-700 mb-8">
                We're available to answer your questions about OsteoStrong and how our revolutionary approach can help improve your bone health, strength, and overall wellbeing.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">Visit Us</h3>
                    <p className="text-gray-700">
                      26 High Street<br />
                      Tunbridge Wells<br />
                      TN1 1UX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">Call Us</h3>
                    <p className="text-gray-700">
                      01892 251360
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">Email Us</h3>
                    <p className="text-gray-700">
                      info@osteostrongtw.co.uk
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">Opening Hours</h3>
                    <p className="text-gray-700">
                      Monday: 9&thinsp;am – 3&thinsp;pm<br />
                      Tuesday: 9&thinsp;am – 3&thinsp;pm<br />
                      Wednesday: Closed<br />
                      Thursday: 12 – 7&thinsp;pm<br />
                      Friday: 9&thinsp;am – 3&thinsp;pm<br />
                      Saturday: 9&thinsp;am – 12&thinsp;pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-black mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/osteostrongtunbridgewells" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/osteostrongtunbridgewells/" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/osteostrong/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@osteostrong/videos" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@osteostrongtw" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div> {/* End of social media icons container */}

              {/* Our Affiliations Section */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-black mb-4">Our Affiliations</h3>
                <div className="flex items-center space-x-6">
                  <a href="https://tunbridgewellsbusinessawards.uk/results/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://ik.imagekit.io/boostkit/OsteoStrong/TWBA.webp?updatedAt=1745331992386" 
                      alt="Tunbridge Wells Business Association Logo" 
                      className="h-24 object-contain" 
                    />
                  </a>
                  <a href="https://www.thetncard.com/osteostrong" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://ik.imagekit.io/boostkit/OsteoStrong/TN_Card.png?updatedAt=1749306955100" 
                      alt="TN Card Logo" 
                      className="h-20 object-contain" 
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-black mb-6">Send Us A Message</h2>
                  <div style={{ height: '800px', overflow: 'hidden' }}>
                    <iframe
                      src="https://link.boostkit.io/widget/form/G7xk974QpQeHpxosiXrA"
                      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', overflow: 'hidden' }}
                      id="inline-G7xk974QpQeHpxosiXrA"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="OsteoStrong New Site"
                      data-height="800"
                      data-layout-iframe-id="inline-G7xk974QpQeHpxosiXrA"
                      data-form-id="G7xk974QpQeHpxosiXrA"
                      title="OsteoStrong New Site"
                      scrolling="no"
                    ></iframe>
                  </div>
                  <script src="https://link.boostkit.io/js/form_embed.js"></script>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Find Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <div className="rounded-xl overflow-hidden shadow-md h-[500px]">
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
      </section>
    </>
  );
};

export default Contact;