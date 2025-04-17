import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative bg-primary">
      <div className="absolute inset-0 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="#FFFFFF" fillOpacity="1" fillRule="evenodd" />
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Strengthen Your Bones, <span className="bg-white text-black px-2 py-1 mt-2 inline-block font-extrabold">Transform Your Life</span>
            </h1>
            <p className="text-xl text-black mb-8 max-w-lg">
              OsteoStrong is a non-pharmaceutical, non-invasive solution to build stronger bones, improved muscle strength and balance, and reduced joint and back pain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/booknow">
                <Button className="bg-white hover:bg-neutral-100 text-black font-bold py-3 px-8 rounded-full transition shadow-md text-center w-full sm:w-auto">
                  Book a Session
                </Button>
              </Link>
              <Link href="#learn-more">
                <Button variant="secondary" className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition shadow-md text-center w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn.sanity.io/images/6ff7gi0z/production/c864edfae596df6a5a4b373d5746dfa993e522b2-2500x1668.webp"
              alt="Person using OsteoStrong equipment"
              className="rounded-lg shadow-xl max-w-full h-auto w-full sm:w-auto"
              style={{ maxHeight: "500px", objectFit: "cover" }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
