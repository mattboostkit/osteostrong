import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Team from "@/components/sections/Team";
import Facility from "@/components/sections/Facility";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About OsteoStrong | Tunbridge Wells</title>
        <meta name="description" content="Learn about OsteoStrong Tunbridge Wells, our mission to improve bone health, and how our unique approach can help you build strength and reduce pain." />
        <meta name="keywords" content="OsteoStrong about, bone health mission, Tunbridge Wells, skeletal strength team, osteogenic loading experts" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/about" />
        <meta property="og:title" content="About OsteoStrong | Tunbridge Wells" />
        <meta property="og:description" content="Learn about OsteoStrong Tunbridge Wells, our mission to improve bone health, and how our unique approach can help you build strength and reduce pain." />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/about-header.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/about" />
        <meta name="twitter:title" content="About OsteoStrong | Tunbridge Wells" />
        <meta name="twitter:description" content="Learn about OsteoStrong Tunbridge Wells, our mission to improve bone health, and how our unique approach can help you build strength and reduce pain." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/about-header.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">About OsteoStrong</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover our revolutionary approach to bone health and skeletal strength
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="prose max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                OsteoStrong was brought to the UK in 2018 after its success in the US, where it has been helping thousands of people improve their bone density, muscle strength, and overall health since 2011.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our Tunbridge Wells centre opened in 2021, with a mission to bring this revolutionary approach to skeletal strength to the local community. Since then, we've helped hundreds of people from across Kent and Sussex to improve their bone health, recover from injuries, and enhance their overall wellbeing.
              </p>
              <p className="text-lg text-gray-700">
                OsteoStrong's approach is based on osteogenic loading, a scientifically-proven method that triggers the body's natural adaptive response to build stronger bones and muscles. Unlike traditional exercise, our sessions take just 10 minutes once a week, making it accessible to people of all ages and fitness levels.
              </p>
            </div>

            <div className="bg-neutral-100 p-8 rounded-xl mb-16">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-0">
                At OsteoStrong Tunbridge Wells, our mission is to help people of all ages improve their bone health, increase their strength, and enhance their overall quality of life through our revolutionary, non-pharmaceutical approach to skeletal strength development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <Team />

      {/* Our Facility */}
      <Facility />

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Our Tunbridge Wells centre is equipped with the latest OsteoStrong technology and staffed by our expert team who will guide you through each session.
            </p>
            <p className="text-lg font-medium text-black mb-8">
              Visit us at: 26 High Street, Tunbridge Wells, TN1 1UX
            </p>
            <Link href="/booknow">
              <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition shadow-md">
                Book Your First Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;