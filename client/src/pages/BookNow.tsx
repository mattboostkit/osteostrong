import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const BookNow = () => {
  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Book A Free Session | OsteoStrong</title>
        <meta name="description" content="Book your free OsteoStrong session today. Take the first step towards stronger bones and improved overall health." />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="py-10 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">Book A Free Session</h1>
          <p className="text-xl text-black">Take the first step towards stronger bones and improved overall health</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-neutral-100 rounded-xl p-8">
            <iframe
              src="https://link.boostkit.io/widget/booking/dnXsEoI1ld9MNSE8Mh3p"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }}
              scrolling="no"
              id="dnXsEoI1ld9MNSE8Mh3p_1745333336950"
            ></iframe>
            <script src="https://link.boostkit.io/js/form_embed.js" type="text/javascript"></script>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-black mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">15-Minute Sessions</h3>
                  <p className="text-gray-600">Our sessions are designed to be quick yet effective, taking just 15 minutes of your time.</p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-tshirt text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">No Special Clothing</h3>
                  <p className="text-gray-600">Come as you are! No need for workout clothes or changing facilities.</p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user-friends text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Guided Experience</h3>
                  <p className="text-gray-600">A trained coach will guide you through each step of your session.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
