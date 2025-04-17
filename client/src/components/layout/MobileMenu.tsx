import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      aria-hidden={!isOpen}
    >
      <div className="flex justify-between items-center p-4 border-b border-neutral-200">
        <h2 className="text-xl font-bold">Menu</h2>
        <button
          onClick={onClose}
          className="text-black focus:outline-none"
          aria-label="Close mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col p-4 overflow-y-auto h-[calc(100%-64px)]">
        <Link href="/" onClick={onClose} className="text-black hover:text-primary font-medium transition py-4 border-b border-neutral-200 text-lg">
          Home
        </Link>
        <Link href="/about" onClick={onClose} className="text-black hover:text-primary font-medium transition py-4 border-b border-neutral-200 text-lg">
          About
        </Link>
        <Link href="/programs" onClick={onClose} className="text-black hover:text-primary font-medium transition py-4 border-b border-neutral-200 text-lg">
          Programs
        </Link>
        <Link href="/contact" onClick={onClose} className="text-black hover:text-primary font-medium transition py-4 border-b border-neutral-200 text-lg">
          Contact
        </Link>
        <Link href="/shop" onClick={onClose} className="text-black hover:text-primary font-medium transition py-4 border-b border-neutral-200 text-lg">
          Shop
        </Link>
        <Link href="/blog" onClick={onClose} className="text-black hover:text-primary font-medium transition py-4 border-b border-neutral-200 text-lg">
          Blog
        </Link>
        <div className="mt-6">
          <Link href="/booknow" onClick={onClose}>
            <Button className="bg-primary hover:bg-yellow-400 text-white font-bold py-4 px-6 rounded-full transition shadow-md text-center w-full text-lg">
              Book Now
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
