import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | OsteoStrong Tunbridge Wells</title>
        <meta name="description" content="Explore our membership options and pricing plans for OsteoStrong sessions and wellness therapies in Tunbridge Wells." />
        <meta name="keywords" content="OsteoStrong pricing, membership plans, skeletal strengthening, wellness therapies, Tunbridge Wells" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/pricing" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/pricing" />
        <meta property="og:title" content="Pricing | OsteoStrong Tunbridge Wells" />
        <meta property="og:description" content="Explore our membership options and pricing plans for OsteoStrong sessions and wellness therapies in Tunbridge Wells." />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/pricing-header.jpg" /> {/* Placeholder - consider a relevant image */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/pricing" />
        <meta name="twitter:title" content="Pricing | OsteoStrong Tunbridge Wells" />
        <meta name="twitter:description" content="Explore our membership options and pricing plans for OsteoStrong sessions and wellness therapies in Tunbridge Wells." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/pricing-header.jpg" /> {/* Placeholder - consider a relevant image */}
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Pricing Plans</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Choose the perfect plan to start your journey to better bone health and overall wellness.
          </p>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Core Plan */}
              <Card className="overflow-hidden flex flex-col">
                <div className="bg-neutral-200 h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Core</h3>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£45</span>
                    <span className="text-gray-600 ml-1">/ session</span>
                    <p className="text-gray-600 mt-2">Billed based on usage</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
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
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Exclusive member events</span>
                    </li>
                  </ul>
                  <Link href="/booknow" className="mt-auto">
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                      Select Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Plus Plan */}
              <Card className="overflow-hidden relative shadow-lg flex flex-col">
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
                <div className="bg-primary h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Plus</h3>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£55</span>
                    <span className="text-gray-600 ml-1">/ session</span>
                    <p className="text-gray-600 mt-2">Billed based on usage</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
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
                      <span className="text-gray-700">Red Light Therapy session</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Access to online resources</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Exclusive member events</span>
                    </li>
                  </ul>
                  <Link href="/booknow" className="mt-auto">
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                      Select Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Ultimate Plan */}
              <Card className="overflow-hidden flex flex-col">
                <div className="bg-neutral-200 h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Ultimate</h3>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£65</span>
                    <span className="text-gray-600 ml-1">/ session</span>
                    <p className="text-gray-600 mt-2">Billed based on usage</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
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
                      <span className="text-gray-700">PEMF Therapy session</span>
                    </li>
                     <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Compression Boots session</span>
                    </li>
                     <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Red Light Therapy session</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Exclusive member events</span>
                    </li>
                  </ul>
                  <Link href="/booknow" className="mt-auto">
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

      {/* CTA - Optional: You may want a different CTA for the pricing page */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Book a free discovery session or contact us if you have any questions about our plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/booknow">
              <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition shadow-md text-center">
                Book A Free Session
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition shadow-md text-center">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
