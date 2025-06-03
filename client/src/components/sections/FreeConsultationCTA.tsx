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
             {/* Example of an image, replace with your actual image from Sanity or local assets */}
            <img 
              src="https://cdn.sanity.io/images/6ff7gi0z/production/4f8a903b7a407a3a100997990a818e000b12979a-1920x1080.jpg" // Example image, replace with actual
              alt="Consultation Visual"
              className="w-full h-full object-cover"
            />
            {/* Or if it's a video like in the screenshot:
            <div className="aspect-video w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with actual video
                title="Consultation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultationCTA;
