import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import Team from "@/components/sections/Team";
import Facility from "@/components/sections/Facility";
import { getPageImage, urlFor } from "@/lib/sanity";
import ScrollLink from "@/components/utils/ScrollLink";

const About = () => {
  const [teamImage, setTeamImage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPageImages = async () => {
      try {
        console.log('Fetching team image with page=about, section=team');
        const teamImageResult = await getPageImage('about', 'team');
        console.log('About team image from Sanity:', teamImageResult);

        // Create a modified version of the result with a direct image URL
        const modifiedResult = teamImageResult || {};
        modifiedResult.directImageUrl = 'https://cdn.sanity.io/images/6ff7gi0z/production/64a04e76fff2bad2249030c35822ca8814ce6b36-720x541.jpg';

        if (teamImageResult && teamImageResult.image) {
          console.log('Team image found, image reference:', teamImageResult.image);

          // Log the constructed image URL
          if (teamImageResult.image.asset && teamImageResult.image.asset._ref) {
            const imageUrl = urlFor(teamImageResult.image).width(1200).height(675).url();
            console.log('Constructed image URL:', imageUrl);
          } else {
            console.warn('Image asset reference is missing or malformed:', teamImageResult.image);
          }
        } else {
          console.warn('No team image found in Sanity or image field is missing');
        }

        // Set the team image with the direct URL included
        setTeamImage(modifiedResult);
      } catch (error) {
        console.error("Error fetching page images from Sanity:", error);
        // Still set a fallback with direct URL
        setTeamImage({ directImageUrl: 'https://cdn.sanity.io/images/6ff7gi0z/production/64a04e76fff2bad2249030c35822ca8814ce6b36-720x541.jpg' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageImages();
  }, []);

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

      {/* Team Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-neutral-100 rounded-xl overflow-hidden shadow-md" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="relative overflow-hidden" style={{ width: '720px', height: '541px', maxWidth: '100%' }}>
                {isLoading ? (
                  <div className="flex justify-center items-center h-full bg-neutral-200">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : teamImage && teamImage.image ? (
                  <img
                    src={urlFor(teamImage.image).width(720).height(541).url()}
                    alt={teamImage.alt || "OsteoStrong Tunbridge Wells Team"}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      console.error(`Failed to load Sanity image for team section`);
                      e.currentTarget.src = 'https://via.placeholder.com/720x541?text=OsteoStrong+Tunbridge+Wells+Team';
                    }}
                  />
                ) : (
                  <>
                    {/* Test with direct Sanity URL */}
                    <img
                      src="https://cdn.sanity.io/images/6ff7gi0z/production/64a04e76fff2bad2249030c35822ca8814ce6b36-720x541.jpg"
                      alt="OsteoStrong Tunbridge Wells Team - Direct URL Test"
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        console.error(`Failed to load direct Sanity image`);
                        e.currentTarget.src = 'https://via.placeholder.com/720x541?text=OsteoStrong+Tunbridge+Wells+Team';
                      }}
                    />
                  </>
                )}
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-black mb-2">Meet the OsteoStrong Tunbridge Wells Team</h2>
                <p className="text-gray-700">{teamImage?.description || "Our dedicated team of professionals is committed to helping you achieve your health and strength goals."}</p>
              </div>
            </div>
          </div>
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
                OsteoStrong was brought to the UK in 2023 after its success in the US, where it has been helping thousands of people improve their bone density, muscle strength, and overall health since 2011.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our Tunbridge Wells centre opened later that year as the first centre in the UK with a mission to bring this revolutionary approach to skeletal strength to the local community. Since then, we've helped hundreds of people from across Kent and Sussex and beyond to improve their bone health, recover from injuries, and enhance their overall wellbeing.
              </p>
              <p className="text-lg text-gray-700">
                OsteoStrong's approach is based on osteogenic loading, a scientifically-proven method that triggers the body's natural adaptive response to build stronger bones and muscles. Unlike traditional exercise, our sessions take just 20 minutes once a week, making it accessible to people of all ages and fitness levels.
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
            <ScrollLink href="/booknow">
              <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition shadow-md">
                Book A Free Session
              </Button>
            </ScrollLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;