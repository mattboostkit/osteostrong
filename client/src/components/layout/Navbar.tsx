import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import Logo from "@/components/ui/logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0 max-w-[120px] md:max-w-[150px]">
            <Logo variant="main" size="small" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`text-black hover:text-primary font-medium transition ${location === '/' ? 'text-primary' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`text-black hover:text-primary font-medium transition ${location === '/about' ? 'text-primary' : ''}`}>
              About
            </Link>
            <Link href="/programs" className={`text-black hover:text-primary font-medium transition ${location === '/programs' ? 'text-primary' : ''}`}>
              Programs
            </Link>
            <Link href="/pricing" className={`text-black hover:text-primary font-medium transition ${location === '/pricing' ? 'text-primary' : ''}`}>Pricing
            </Link>
            <Link href="/studies" className={`text-black hover:text-primary font-medium transition ${location === '/studies' ? 'text-primary' : ''}`}>Studies
            </Link>
            <Link href="/contact" className={`text-black hover:text-primary font-medium transition ${location === '/contact' ? 'text-primary' : ''}`}>
              Contact
            </Link>

            <Link href="/blog" className={`text-black hover:text-primary font-medium transition ${location === '/blog' ? 'text-primary' : ''}`}>
              Blog
            </Link>
          </nav>

          {/* Book Now Button */}
          <Link href="/booknow" className="hidden md:block">
            <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition shadow-md">
              Book A Free Session
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-black focus:outline-none"
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
