import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Locations = () => {
  const locationInfo = {
    name: "Tunbridge Wells",
    description: "Our centre located in the heart of Tunbridge Wells.",
    image: "https://ik.imagekit.io/boostkit/OsteoStrong/OsteoStrong%20TW.jpg?updatedAt=1745332732825",
    address: "26 High St, Tunbridge Wells TN1 1UX",
    phone: "07444 298615",
    hours: `Monday: 9 am – 3 pm\nTuesday: 9 am – 3 pm\nWednesday: Closed\nThursday: 12 – 7 pm\nFriday: 9 am – 3 pm\nSaturday: 9 am – 12 pm\nSunday: Closed`
  };

  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Location</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visit our OsteoStrong centre in Tunbridge Wells. Our convenient location offers revolutionary technology and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <Card className="bg-neutral-100 rounded-xl overflow-hidden transition-all hover:shadow-lg">
            <img
              src={locationInfo.image}
              alt={`${locationInfo.name} Location`}
              className="w-full h-48 object-cover"
              loading="eager"
              onError={(e) => {
                console.error(`Failed to load location image: ${locationInfo.image}`);
                e.currentTarget.style.display = 'none';
              }}
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black">{locationInfo.name}</h3>
              <p className="text-gray-600 mb-4">{locationInfo.description}</p>
              <div className="mb-4">
                <p className="mb-2">
                  <i className="fas fa-map-marker-alt text-primary mr-2"></i> {locationInfo.address}
                </p>
                <p className="mb-2">
                  <i className="fas fa-phone text-primary mr-2"></i> {locationInfo.phone}
                </p>
                <p>
                  <i className="fas fa-clock text-primary mr-2"></i> {locationInfo.hours}
                </p>
              </div>
              <div className="flex space-x-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(locationInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition shadow-md text-center flex-1 flex justify-center items-center"
                >
                  <i className="fas fa-directions mr-2"></i> Directions
                </a>
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition shadow-md text-center flex-1">
                    Book A Free Session
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-xl overflow-hidden h-full min-h-[400px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5007.767539208316!2d0.27160002735648064!3d51.129051923043235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df450670a1fda1%3A0x807a08d1da3636b1!2sOsteoStrong%20Tunbridge%20Wells!5e0!3m2!1sen!2suk!4v1749113864269!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OsteoStrong Tunbridge Wells Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
