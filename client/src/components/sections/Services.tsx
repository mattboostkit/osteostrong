import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Core OsteoStrong Session",
    description: "Our foundational service: a 10-minute session using our patented biomechanical equipment to trigger osteogenic loading.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Four specialized biomechanical devices",
      "Guided by certified OsteoStrong coach",
      "Weekly sessions for optimal results"
    ]
  },
  {
    title: "Performance Assessment",
    description: "Comprehensive evaluation of your current bone density, muscular strength, and balance to establish baselines and track improvement.",
    image: "https://images.unsplash.com/photo-1579684288376-ebb495cf1d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Detailed initial assessment",
      "Regular progress tracking",
      "Personalized improvement plan"
    ]
  },
  {
    title: "Wellness Consultation",
    description: "One-on-one consultation with our health specialists to discuss your specific health concerns and goals.",
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Personalized health discussion",
      "Customized recommendations",
      "Integration with other health services"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OsteoStrong offers a range of services designed to improve your overall health and wellbeing through our revolutionary approach to bone and muscle strengthening.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-neutral-100 rounded-xl overflow-hidden transition-all hover:shadow-lg">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
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
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-white font-bold py-2 px-6 rounded-full transition shadow-md text-center w-full">
                    Book a Session
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
