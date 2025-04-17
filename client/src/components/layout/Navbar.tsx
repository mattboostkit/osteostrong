import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg
              className="h-12 w-auto text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
              <path
                d="M8 12l3 3 5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2 text-2xl font-bold text-secondary">
              OsteoStrong
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`text-black hover:text-primary font-medium transition ${location === '/' ? 'text-primary' : ''}`}>
              Home
            </Link>
            <a href="/#about" className="text-black hover:text-primary font-medium transition">
              About
            </a>
            <a href="/#services" className="text-black hover:text-primary font-medium transition">
              Services
            </a>
            <a href="/#testimonials" className="text-black hover:text-primary font-medium transition">
              Testimonials
            </a>
            <a href="/#faq" className="text-black hover:text-primary font-medium transition">
              FAQ
            </a>
            <a href="/#contact" className="text-black hover:text-primary font-medium transition">
              Contact
            </a>
            <Link href="/shop" className={`text-black hover:text-primary font-medium transition ${location === '/shop' ? 'text-primary' : ''}`}>
              Shop
            </Link>
            <Link href="/blog" className={`text-black hover:text-primary font-medium transition ${location === '/blog' ? 'text-primary' : ''}`}>
              Blog
            </Link>
          </nav>

          {/* Book Now Button */}
          <Link href="/booknow" className="hidden md:block">
            <Button className="bg-primary hover:bg-yellow-400 text-white font-bold py-2 px-6 rounded-full transition shadow-md">
              Book Now
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-secondary focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Navbar;
