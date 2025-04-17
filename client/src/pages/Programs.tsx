import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs | OsteoStrong Tunbridge Wells</title>
        <meta name="description" content="Explore the OsteoStrong programs in Tunbridge Wells, including our core skeletal strengthening sessions, performance assessments, and wellness consultations." />
        <meta name="keywords" content="OsteoStrong programs, osteogenic loading, bone strengthening, performance assessment, wellness consultation, Tunbridge Wells" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/programs" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/programs" />
        <meta property="og:title" content="Programs | OsteoStrong Tunbridge Wells" />
        <meta property="og:description" content="Explore the OsteoStrong programs in Tunbridge Wells, including our core skeletal strengthening sessions, performance assessments, and wellness consultations." />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/programs-header.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/programs" />
        <meta name="twitter:title" content="Programs | OsteoStrong Tunbridge Wells" />
        <meta name="twitter:description" content="Explore the OsteoStrong programs in Tunbridge Wells, including our core skeletal strengthening sessions, performance assessments, and wellness consultations." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/programs-header.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Programs</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover our range of specialized programs designed to improve your skeletal strength, overall health, and quality of life
          </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Program 1 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400">Core Session Image</span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Core OsteoStrong Session</h3>
                <p className="text-gray-700 mb-6">
                  Our flagship program consists of a 10-minute session once per week, where you'll use our specialized equipment to safely apply the precise forces needed to stimulate bone growth and muscle strength. Each session is guided by our expert coaches who will ensure you're using the correct technique to maximize results.
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
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book Your Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 2 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400">Performance Assessment Image</span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Performance Assessment</h3>
                <p className="text-gray-700 mb-6">
                  Our comprehensive performance assessment evaluates your current bone density, muscular strength, balance, and posture. This data-driven approach allows us to create a personalized OsteoStrong program tailored to your specific needs and goals, and to track your progress over time.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Includes:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Ultrasound heel bone scan</li>
                    <li>Functional strength testing</li>
                    <li>Balance assessment</li>
                    <li>Posture analysis</li>
                    <li>Personalized program recommendation</li>
                  </ul>
                </div>
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book Assessment
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 3 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400">Wellness Consultation Image</span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Wellness Consultation</h3>
                <p className="text-gray-700 mb-6">
                  Our wellness consultation goes beyond skeletal strength to address your overall health and wellbeing. During this one-on-one session, our experts will discuss your health history, current concerns, and goals to develop a holistic approach that complements your OsteoStrong sessions.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Discussion topics:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Nutritional support for bone health</li>
                    <li>Lifestyle modifications</li>
                    <li>Complementary exercise recommendations</li>
                    <li>Stress management techniques</li>
                    <li>Sleep optimization strategies</li>
                  </ul>
                </div>
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 4 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400">Corporate Program Image</span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Corporate Packages</h3>
                <p className="text-gray-700 mb-6">
                  Our corporate wellness packages are designed to improve the health, wellbeing, and productivity of your team. We offer group sessions at our Tunbridge Wells centre or can arrange on-site services for larger organizations in the area.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Corporate benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Reduced absenteeism due to injury or illness</li>
                    <li>Improved employee energy and productivity</li>
                    <li>Enhanced team morale and wellbeing</li>
                    <li>Customizable packages for any size organization</li>
                    <li>Educational workshops and health seminars</li>
                  </ul>
                </div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Inquire About Corporate Packages
                  </Button>
                </Link>
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
              We offer flexible membership options to suit your specific needs and goals. All memberships include access to our expert coaches, specialized equipment, and ongoing progress tracking.
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
                  <Link href="/booknow">
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                      Select Plan
                    </Button>
                  </Link>
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
                  <Link href="/booknow">
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                      Select Plan
                    </Button>
                  </Link>
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
                  <Link href="/booknow">
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                      Select Plan
                    </Button>
                  </Link>
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
            <Link href="/booknow">
              <Button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition shadow-md text-center">
                Book Your First Session
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="bg-white hover:bg-neutral-100 text-black font-bold py-3 px-8 rounded-full transition shadow-md text-center">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;