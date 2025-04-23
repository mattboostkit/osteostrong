import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { getPageImage, urlFor } from "@/lib/sanity";
import ScrollLink from "@/components/utils/ScrollLink";

const Programs = () => {
  const [programsImage, setProgramsImage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPageImages = async () => {
      try {
        const programsImageResult = await getPageImage('programs', 'header');
        console.log('Programs header image from Sanity:', programsImageResult);

        if (programsImageResult && programsImageResult.image) {
          setProgramsImage(programsImageResult);
        }
      } catch (error) {
        console.error("Error fetching page images from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageImages();
  }, []);

  return (
    <>
      <Helmet>
        <title>Programs | OsteoStrong Tunbridge Wells</title>
        <meta name="description" content="Explore the OsteoStrong programs in Tunbridge Wells, including our core skeletal strengthening sessions, performance assessments, PEMF therapy, compression boots, and red light therapy." />
        <meta name="keywords" content="OsteoStrong programs, osteogenic loading, bone strengthening, performance assessment, PEMF therapy, compression boots, red light therapy, Tunbridge Wells" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/programs" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/programs" />
        <meta property="og:title" content="Programs | OsteoStrong Tunbridge Wells" />
        <meta property="og:description" content="Explore the OsteoStrong programs in Tunbridge Wells, including our core skeletal strengthening sessions, performance assessments, PEMF therapy, compression boots, and red light therapy." />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/programs-header.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/programs" />
        <meta name="twitter:title" content="Programs | OsteoStrong Tunbridge Wells" />
        <meta name="twitter:description" content="Explore the OsteoStrong programs in Tunbridge Wells, including our core skeletal strengthening sessions, performance assessments, PEMF therapy, compression boots, and red light therapy." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/programs-header.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Programs</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover our range of specialised programs designed to improve your skeletal strength, overall health, and quality of life
          </p>
        </div>
      </section>

      {/* Programs Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-neutral-100 rounded-xl overflow-hidden shadow-md" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="relative overflow-hidden" style={{ width: '720px', height: '541px', maxWidth: '100%' }}>
                {isLoading ? (
                  <div className="flex justify-center items-center h-full bg-neutral-200">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : programsImage && programsImage.image ? (
                  <img
                    src={urlFor(programsImage.image).width(720).height(541).url()}
                    alt={programsImage.alt || "OsteoStrong Tunbridge Wells Programs"}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      console.error(`Failed to load Sanity image for programs section`);
                      e.currentTarget.src = 'https://cdn.sanity.io/images/6ff7gi0z/production/7a2f8a412537569cdd8abae4b6ca8f82df0e6e8b-720x541.jpg';
                    }}
                  />
                ) : (
                  <img
                    src="https://cdn.sanity.io/images/6ff7gi0z/production/7a2f8a412537569cdd8abae4b6ca8f82df0e6e8b-720x541.jpg"
                    alt="OsteoStrong Tunbridge Wells Programs"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/720x541?text=OsteoStrong+Tunbridge+Wells+Programs';
                    }}
                  />
                )}
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-black mb-2">Our Revolutionary Programs</h2>
                <p className="text-gray-700">{programsImage?.description || "Discover how our specialised programs can help you build strength, improve bone density, and enhance your overall health."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Transform Your Health With OsteoStrong</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              At OsteoStrong Tunbridge Wells, we offer a range of programs designed to help you build skeletal strength, improve bone density, enhance athletic performance, and reduce joint and back pain. All our programs are based on osteogenic loading, a scientifically-proven approach that triggers the body's natural adaptive response to build stronger bones and muscles.
            </p>
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Program 1 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/Core%20OsteoStrong%20Session.jpg?updatedAt=1745330681219"
                alt="Core OsteoStrong Session"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Core OsteoStrong Session</h3>
                <p className="text-gray-700 mb-6">
                  Our flagship program consists of a 15-minute session once per week, where you'll use our specialised equipment to safely apply the precise forces needed to stimulate bone growth and muscle strength. Each session is guided by our expert coaches who will ensure you're using the correct technique to maximise results.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Improved bone density</li>
                    <li>Increased skeletal strength</li>
                    <li>Enhanced muscle strength</li>
                    <li>Better balance and posture</li>
                    <li>Reduced joint and back pain</li>
                  </ul>
                </div>
                <ScrollLink href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book Your Session
                  </Button>
                </ScrollLink>
              </CardContent>
            </Card>

            {/* Program 2 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/Performance%20Assessment.jpg?updatedAt=1745330681149"
                alt="Performance Assessment"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Performance Assessment</h3>
                <p className="text-gray-700 mb-6">
                  Our comprehensive performance assessment evaluates your current bone density, muscular strength, balance, and posture. This data-driven approach allows us to create a personalised OsteoStrong program tailored to your specific needs and goals, and to track your progress over time.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Includes:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Ultrasound heel bone scan</li>
                    <li>Functional strength testing</li>
                    <li>Balance assessment</li>
                    <li>Posture analysis</li>
                    <li>Personalised programme recommendation</li>
                  </ul>
                </div>
                <ScrollLink href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book A Free Session
                  </Button>
                </ScrollLink>
              </CardContent>
            </Card>

            {/* Program 3 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/PEMF.jpg?updatedAt=1745330681123"
                alt="PEMF Therapy"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Pulsed Electromagnetic Field (PEMF) Therapy</h3>
                <p className="text-gray-700 mb-6">
                  Our advanced PEMF therapy uses electromagnetic fields to stimulate cellular repair, reduce inflammation, and accelerate healing processes. This non-invasive treatment can help with pain management, recovery, and overall cellular health.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Reduced pain and inflammation</li>
                    <li>Enhanced cellular regeneration</li>
                    <li>Improved circulation</li>
                    <li>Accelerated recovery from injury</li>
                    <li>Complementary to OsteoStrong sessions</li>
                  </ul>
                </div>
                <ScrollLink href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book A Session
                  </Button>
                </ScrollLink>
              </CardContent>
            </Card>

            {/* Program 4 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/Compression%20Boots.jpg?updatedAt=1745330681403"
                alt="Compression Boots"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Compression Boots</h3>
                <p className="text-gray-700 mb-6">
                  Our compression boot therapy enhances circulation, reduces muscle soreness, and speeds up recovery after physical activity. This dynamic compression system helps flush out metabolic waste and reduce inflammation in the legs.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Accelerated recovery time</li>
                    <li>Reduced muscle fatigue and soreness</li>
                    <li>Enhanced lymphatic drainage</li>
                    <li>Improved circulation</li>
                    <li>Ideal for athletes and active individuals</li>
                  </ul>
                </div>
                <ScrollLink href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book A Session
                  </Button>
                </ScrollLink>
              </CardContent>
            </Card>

            {/* Program 5 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/RLT.jpg?updatedAt=1745330681266"
                alt="Red Light Therapy"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Red Light Therapy</h3>
                <p className="text-gray-700 mb-6">
                  Our red light therapy uses specific wavelengths of red and near-infrared light to promote cellular energy production, tissue repair, and reduced inflammation. This non-invasive treatment can help with skin rejuvenation, pain management, and overall cellular health.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Skin rejuvenation and collagen production</li>
                    <li>Reduced joint pain and inflammation</li>
                    <li>Enhanced cellular function and energy</li>
                    <li>Improved tissue healing</li>
                    <li>Complementary to OsteoStrong sessions</li>
                  </ul>
                </div>
                <ScrollLink href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book A Session
                  </Button>
                </ScrollLink>
              </CardContent>
            </Card>

            {/* Program 6 */}
            <Card className="overflow-hidden">
              <img
                src="https://cdn.sanity.io/images/6ff7gi0z/production/c864edfae596df6a5a4b373d5746dfa993e522b2-2500x1668.webp"
                alt="Corporate Packages"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Corporate Packages</h3>
                <p className="text-gray-700 mb-6">
                  Our corporate wellness packages are designed to improve the health, wellbeing, and productivity of your team. We offer group sessions at our Tunbridge Wells centre or can arrange on-site services for larger organisations in the area.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Corporate benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Reduced absenteeism due to injury or illness</li>
                    <li>Improved employee energy and productivity</li>
                    <li>Enhanced team morale and wellbeing</li>
                    <li>Customisable packages for any size organisation</li>
                    <li>Educational workshops and health seminars</li>
                  </ul>
                </div>
                <ScrollLink href="/contact">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Enquire About Corporate Packages
                  </Button>
                </ScrollLink>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Membership Options</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              We offer flexible membership options to suit your specific needs and goals. All memberships include access to our expert coaches, specialised equipment, and ongoing progress tracking.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Membership 1 */}
              <Card className="overflow-hidden">
                <div className="bg-primary h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Standard</h3>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£145</span>
                    <span className="text-gray-600 ml-1">/ month</span>
                    <p className="text-gray-600 mt-2">Billed monthly</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Weekly OsteoStrong sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Initial performance assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Quarterly progress reviews</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Access to online resources</span>
                    </li>
                  </ul>
                  <ScrollLink href="/booknow">
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                      Select Plan
                    </Button>
                  </ScrollLink>
                </CardContent>
              </Card>

              {/* Membership 2 */}
              <Card className="overflow-hidden relative shadow-lg">
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
                <div className="bg-primary h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Premium</h3>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£185</span>
                    <span className="text-gray-600 ml-1">/ month</span>
                    <p className="text-gray-600 mt-2">Billed monthly</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Weekly OsteoStrong sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Initial performance assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Monthly progress reviews</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Quarterly wellness consultation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Access to online resources</span>
                    </li>
                  </ul>
                  <ScrollLink href="/booknow">
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                      Select Plan
                    </Button>
                  </ScrollLink>
                </CardContent>
              </Card>

              {/* Membership 3 */}
              <Card className="overflow-hidden">
                <div className="bg-primary h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Ultimate</h3>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£225</span>
                    <span className="text-gray-600 ml-1">/ month</span>
                    <p className="text-gray-600 mt-2">Billed monthly</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Weekly OsteoStrong sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Comprehensive initial assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Bi-weekly progress reviews</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Monthly wellness consultation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Priority scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Exclusive member events</span>
                    </li>
                  </ul>
                  <ScrollLink href="/booknow">
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                      Select Plan
                    </Button>
                  </ScrollLink>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8">
            Take the first step towards stronger bones, improved muscle strength, and better overall health with OsteoStrong.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <ScrollLink href="/booknow">
              <Button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition shadow-md text-center">
                Book A Free Session
              </Button>
            </ScrollLink>
            <ScrollLink href="/contact">
              <Button variant="secondary" className="bg-white hover:bg-neutral-100 text-black font-bold py-2 px-6 rounded-full transition shadow-md text-center">
                Contact Us
              </Button>
            </ScrollLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;