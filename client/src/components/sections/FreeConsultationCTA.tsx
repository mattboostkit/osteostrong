import { Button } from "@/components/ui/button";
import ScrollLink from "@/components/utils/ScrollLink"; // Assuming ScrollLink is used for navigation

const FreeConsultationCTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100"> {/* Or bg-white depending on surrounding sections */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden md:flex">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Start with a Free Consultation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your complimentary consultation today!
            </p>
            <div className="flex">
              <ScrollLink href="/booknow"> {/* Ensure this path is correct for booking */}
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition shadow-md text-lg">
                  Schedule Your Consultation
                </Button>
              </ScrollLink>
            </div>
          </div>

          {/* Right Side: Image/Video Placeholder */}
          {/* Replace this div with your actual image or video component */}
          <div className="md:w-1/2 bg-gray-300 min-h-[300px] md:min-h-full flex items-center justify-center">
            <iframe
              src="https://link.boostkit.io/widget/booking/dnXsEoI1ld9MNSE8Mh3p"
              scrolling="no"
              id="dnXsEoI1ld9MNSE8Mh3p_1745333336950"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }}
              title="Book a Session"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultationCTA;
