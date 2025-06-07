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


      {/* Our Membership Tiers - New Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Our Membership Tiers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Core Plan */}
              <Card className="overflow-hidden flex flex-col">
                <div className="bg-primary h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Core</h3>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£35</span>
                    <span className="text-gray-600 ml-1">per session</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Weekly OsteoStrong sessions</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Dedicated Coach</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Initial performance assessment</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Quarterly progress reviews</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Access to online resources</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Exclusive member events</span></li>
                  </ul>
                  <Link href="/booknow" className="mt-auto flex justify-center"><Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md">Select Plan</Button></Link>
                </CardContent>
              </Card>
              {/* Silver Plan */}
              <Card className="overflow-hidden flex flex-col">
                <div className="bg-primary h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Silver</h3>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£45</span>
                    <span className="text-gray-600 ml-1">per session</span>
                    <p className="text-gray-600 mt-2">(1 modality)</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Weekly OsteoStrong sessions</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Dedicated Coach</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Comprehensive initial assessment</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Monthly wellness consultation</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">PEMF Therapy session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Compression Boots session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Red Light Therapy session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Exclusive member events</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Assessment after every 20 sessions (approx. 3 months)</span></li>
                  </ul>
                  <Link href="/booknow" className="mt-auto flex justify-center"><Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md">Select Plan</Button></Link>
                </CardContent>
              </Card>
              {/* Gold Plan */}
              <Card className="overflow-hidden flex flex-col">
                <div className="bg-primary h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Gold</h3>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£55</span>
                    <span className="text-gray-600 ml-1">per session</span>
                    <p className="text-gray-600 mt-2">(2 modalities)</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Weekly OsteoStrong sessions</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Dedicated Coach</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Comprehensive initial assessment</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Monthly wellness consultation</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">PEMF Therapy session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Compression Boots session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Red Light Therapy session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Exclusive member events</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Assessment after every 20 sessions (approx. 3 months)</span></li>
                  </ul>
                  <Link href="/booknow" className="mt-auto flex justify-center"><Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md">Select Plan</Button></Link>
                </CardContent>
              </Card>
              {/* Platinum Plan */}
              <Card className="overflow-hidden flex flex-col">
                <div className="bg-primary h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-black">Platinum</h3>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-black">£65</span>
                    <span className="text-gray-600 ml-1">per session</span>
                    <p className="text-gray-600 mt-2">(3 modalities)</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Weekly OsteoStrong sessions</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Dedicated Coach</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Comprehensive initial assessment</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Monthly wellness consultation</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">PEMF Therapy session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Compression Boots session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Red Light Therapy session</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Exclusive member events</span></li>
                    <li className="flex items-start"><svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">Assessment after every 20 sessions (approx. 3 months)</span></li>
                  </ul>
                  <Link href="/booknow" className="mt-auto flex justify-center"><Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md">Select Plan</Button></Link>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <div className="text-lg font-semibold text-black mb-2">Joining fee: £160</div>
              <div className="text-base text-gray-700">Long term memberships:</div>
              <div className="text-base text-gray-700">6-month memberships <span className="font-bold">-5% discount</span></div>
              <div className="text-base text-gray-700">12-month memberships <span className="font-bold">-10% discount</span></div>
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
              <Button>
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
