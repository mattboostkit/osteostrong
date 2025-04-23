import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ScrollLink from "@/components/utils/ScrollLink";
import { getServices, urlFor } from "@/lib/sanity";

// Fallback services data if Sanity data is not available
const fallbackServices = [
  {
    title: "Core OsteoStrong Session",
    description: "Our foundational service: a 15-minute session using our patented biomechanical equipment to trigger osteogenic loading.",
    imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Core%20OsteoStrong%20Session.jpg?updatedAt=1745330681219",
    features: [
      "Four specialised biomechanical devices",
      "Guided by certified OsteoStrong coach",
      "Weekly sessions for optimal results"
    ],
    ctaText: "Book A Free Session",
    ctaLink: "/booknow"
  },
  {
    title: "Performance Assessment",
    description: "Comprehensive evaluation of your current bone density, muscular strength, and balance to establish baselines and track improvement.",
    imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Performance%20Assessment.jpg?updatedAt=1745330681149",
    features: [
      "Detailed initial assessment",
      "Regular progress tracking",
      "Personalised improvement plan"
    ],
    ctaText: "Book A Free Session",
    ctaLink: "/booknow"
  },
  {
    title: "Pulsed Electromagnetic Field (PEMF) Therapy",
    description: "Advanced therapy that uses electromagnetic fields to stimulate cellular repair, reduce inflammation, and accelerate healing processes.",
    imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/PEMF.jpg?updatedAt=1745330681123",
    features: [
      "Non-invasive pain management",
      "Enhanced cellular regeneration",
      "Improved circulation and recovery"
    ],
    ctaText: "Book A Free Session",
    ctaLink: "/booknow"
  },
  {
    title: "Compression Boots",
    description: "Dynamic compression therapy that enhances circulation, reduces muscle soreness, and speeds up recovery after physical activity.",
    imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/Compression%20Boots.jpg?updatedAt=1745330681403",
    features: [
      "Accelerated recovery time",
      "Reduced muscle fatigue",
      "Enhanced lymphatic drainage"
    ],
    ctaText: "Book A Free Session",
    ctaLink: "/booknow"
  },
  {
    title: "Red Light Therapy",
    description: "Therapeutic exposure to red and near-infrared light that promotes cellular energy production, tissue repair, and reduced inflammation.",
    imageUrl: "https://ik.imagekit.io/boostkit/OsteoStrong/RLT.jpg?updatedAt=1745330681266",
    features: [
      "Skin rejuvenation",
      "Reduced joint pain",
      "Enhanced cellular function"
    ],
    ctaText: "Book A Free Session",
    ctaLink: "/booknow"
  }
];

// Type definition for a service
type Service = {
  _id?: string;
  title: string;
  description: string;
  image?: any; // Sanity image reference
  imageUrl?: string; // Direct image URL for fallback
  features: string[];
  ctaText: string;
  ctaLink: string;
  order?: number;
};

const Services = () => {
  const [services, setServices] = useState<Service[]>(fallbackServices);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await getServices();
        console.log('Services from Sanity:', result);

        if (result && result.length > 0) {
          // Transform Sanity data to match our Service type
          const sanityServices = result.map((service: any) => {
            // Check if the image is valid
            const hasValidImage = service.image && service.image.asset && service.image.asset._ref;

            return {
              _id: service._id,
              title: service.title,
              description: service.description,
              image: hasValidImage ? service.image : undefined,
              features: service.features || [],
              ctaText: service.ctaText || "Book A Free Session",
              ctaLink: service.ctaLink || "/booknow",
              order: service.order
            };
          });

          setServices(sanityServices);
        } else {
          console.log('No services found in Sanity, using fallback services');
          setServices(fallbackServices);
        }
      } catch (error) {
        console.error("Error fetching services from Sanity:", error);
        setServices(fallbackServices);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OsteoStrong offers a range of services designed to improve your overall health and wellbeing through our revolutionary approach to bone and muscle strengthening.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <Card key={service._id || index} className="bg-neutral-100 rounded-xl overflow-hidden transition-all hover:shadow-lg">
                {service.image && service.image.asset && service.image.asset._ref ? (
                  <img
                    src={urlFor(service.image).width(600).height(400).url()}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                    loading="eager"
                    onError={(e) => {
                      console.error(`Failed to load Sanity image for: ${service.title}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : service.imageUrl ? (
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                    loading="eager"
                    onError={(e) => {
                      console.error(`Failed to load image: ${service.imageUrl}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-48 bg-neutral-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-neutral-400 mt-2">Service Image</span>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <i className="fas fa-check text-primary mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ScrollLink href={service.ctaLink}>
                    <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition shadow-md text-center w-full">
                      {service.ctaText}
                    </Button>
                  </ScrollLink>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
