import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const locations = [
  {
    name: "Tunbridge Wells",
    description: "Our flagship centre located in the heart of Tunbridge Wells.",
    image: "https://images.unsplash.com/photo-1520881196607-62e2e2f60aa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    address: "123 High Street, Tunbridge Wells, TN1 1AB",
    phone: "01892 123 456",
    hours: "Mon-Fri: 9am-6pm, Sat: 10am-4pm"
  },
  {
    name: "London - Kensington",
    description: "Our central London location, easily accessible from all parts of the city.",
    image: "https://images.unsplash.com/photo-1578935461364-c7c6523da517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    address: "45 Kensington High Street, London, W8 5ED",
    phone: "020 7123 4567",
    hours: "Mon-Fri: 8am-8pm, Sat-Sun: 9am-5pm"
  },
  {
    name: "Manchester",
    description: "Serving the North West with our state-of-the-art facility in Manchester.",
    image: "https://images.unsplash.com/photo-1516571748831-5d81767b788d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    address: "78 Deansgate, Manchester, M3 2FE",
    phone: "0161 234 5678",
    hours: "Mon-Fri: 9am-7pm, Sat: 10am-4pm"
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visit one of our convenient OsteoStrong centres across the UK. Each location offers the same revolutionary technology and expert guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="bg-neutral-100 rounded-xl overflow-hidden transition-all hover:shadow-lg">
              <img 
                src={location.image} 
                alt={`${location.name} Location`} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="mb-4">
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i> {location.address}
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-phone text-primary mr-2"></i> {location.phone}
                  </p>
                  <p>
                    <i className="fas fa-clock text-primary mr-2"></i> {location.hours}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-secondary hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition shadow-md text-center flex-1 flex justify-center items-center"
                  >
                    <i className="fas fa-directions mr-2"></i> Directions
                  </a>
                  <Link href="/booknow">
                    <Button className="bg-primary hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full transition shadow-md text-center flex-1">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
