import { Helmet } from "react-helmet";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | OsteoStrong Tunbridge Wells</title>
        <meta name="description" content="Our cookie policy explains how OsteoStrong Tunbridge Wells uses cookies and similar technologies to recognize and remember you when you visit our website." />
        <meta name="keywords" content="OsteoStrong cookie policy, privacy, data protection, GDPR, cookie consent" />
        <meta property="og:title" content="Cookie Policy | OsteoStrong Tunbridge Wells" />
        <meta property="og:description" content="Our cookie policy explains how OsteoStrong Tunbridge Wells uses cookies and similar technologies to recognize and remember you when you visit our website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/cookie-policy" />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/cookie-policy" />
        <meta name="twitter:title" content="Cookie Policy | OsteoStrong Tunbridge Wells" />
        <meta name="twitter:description" content="Our cookie policy explains how OsteoStrong Tunbridge Wells uses cookies and similar technologies to recognize and remember you when you visit our website." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />

        <link rel="canonical" href="https://www.osteostrongtw.co.uk/cookie-policy" />
      </Helmet>

      <div className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: 17 April 2025</p>
            
            <div className="prose max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">What Are Cookies</h2>
              <p>
                As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.
              </p>
              
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
              </p>
              
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">The Cookies We Set</h2>
              
              <h3 className="text-xl font-bold text-black mt-6 mb-3">Account Related Cookies</h3>
              <p>
                If you create an account with us, we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out; however, in some cases, they may remain afterwards to remember your site preferences when logged out.
              </p>
              
              <h3 className="text-xl font-bold text-black mt-6 mb-3">Login Related Cookies</h3>
              <p>
                We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
              </p>
              
              <h3 className="text-xl font-bold text-black mt-6 mb-3">Forms Related Cookies</h3>
              <p>
                When you submit data to through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.
              </p>
              
              <h3 className="text-xl font-bold text-black mt-6 mb-3">Site Preferences Cookies</h3>
              <p>
                In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
              </p>
              
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">Third Party Cookies</h2>
              <p>
                In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
                <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</li>
                <li>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work, social media sites will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">More Information</h2>
              <p>
                Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
              </p>
              <p className="mt-4">
                However if you are still looking for more information then you can contact us through one of our preferred contact methods:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Email: info@osteostrongtw.co.uk</li>
                <li>Phone: 01892 884444</li>
                <li>Address: 26 High Street, Tunbridge Wells, TN1 1UX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;