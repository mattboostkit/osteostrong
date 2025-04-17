import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About OsteoStrong | Tunbridge Wells</title>
        <meta name="description" content="Learn about OsteoStrong Tunbridge Wells, our mission to improve bone health, and how our unique approach can help you build strength and reduce pain." />
        <meta name="keywords" content="OsteoStrong about, bone health mission, Tunbridge Wells, skeletal strength team, osteogenic loading experts" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/about" />
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
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Meet Our Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our passionate team of experts is dedicated to helping you achieve your health and strength goals through our unique OsteoStrong methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400">Team Member Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-4">Centre Manager</p>
                <p className="text-gray-700 mb-4">
                  With over 10 years of experience in health and wellness, Sarah is passionate about helping people achieve their strength goals and improve their quality of life.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400">Team Member Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">James Wilson</h3>
                <p className="text-primary font-medium mb-4">Lead Coach</p>
                <p className="text-gray-700 mb-4">
                  James specializes in osteogenic loading techniques and has helped hundreds of clients improve their bone density and overall strength through the OsteoStrong method.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400">Team Member Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">Emma Thompson</h3>
                <p className="text-primary font-medium mb-4">Wellness Coach</p>
                <p className="text-gray-700 mb-4">
                  Emma's background in physiotherapy and nutrition makes her an invaluable resource for clients looking to improve their overall health alongside their OsteoStrong sessions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Our Facility</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Located in the heart of Tunbridge Wells, our state-of-the-art centre provides a welcoming environment for your OsteoStrong sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Facility Image 1 */}
            <div className="h-64 bg-neutral-200 rounded-xl flex items-center justify-center">
              <span className="text-neutral-400">Facility Image</span>
            </div>

            {/* Facility Image 2 */}
            <div className="h-64 bg-neutral-200 rounded-xl flex items-center justify-center">
              <span className="text-neutral-400">Facility Image</span>
            </div>

            {/* Facility Image 3 */}
            <div className="h-64 bg-neutral-200 rounded-xl flex items-center justify-center">
              <span className="text-neutral-400">Facility Image</span>
            </div>

            {/* Facility Image 4 */}
            <div className="h-64 bg-neutral-200 rounded-xl flex items-center justify-center">
              <span className="text-neutral-400">Facility Image</span>
            </div>

            {/* Facility Image 5 */}
            <div className="h-64 bg-neutral-200 rounded-xl flex items-center justify-center">
              <span className="text-neutral-400">Facility Image</span>
            </div>

            {/* Facility Image 6 */}
            <div className="h-64 bg-neutral-200 rounded-xl flex items-center justify-center">
              <span className="text-neutral-400">Facility Image</span>
            </div>
          </div>

          <div className="mt-10 text-center">
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