import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4">
      <nav className="flex flex-col space-y-4">
        <Link href="/" onClick={onClose} className="text-secondary hover:text-primary font-medium transition py-2 border-b border-neutral-200">
          Home
        </Link>
        <Link href="/#about" onClick={onClose} className="text-secondary hover:text-primary font-medium transition py-2 border-b border-neutral-200">
          About
        </Link>
        <Link href="/#services" onClick={onClose} className="text-secondary hover:text-primary font-medium transition py-2 border-b border-neutral-200">
          Services
        </Link>
        <Link href="/#locations" onClick={onClose} className="text-secondary hover:text-primary font-medium transition py-2 border-b border-neutral-200">
          Locations
        </Link>
        <Link href="/#testimonials" onClick={onClose} className="text-secondary hover:text-primary font-medium transition py-2 border-b border-neutral-200">
          Testimonials
        </Link>
        <Link href="/#faq" onClick={onClose} className="text-secondary hover:text-primary font-medium transition py-2 border-b border-neutral-200">
          FAQ
        </Link>
        <Link href="/#contact" onClick={onClose} className="text-secondary hover:text-primary font-medium transition py-2 border-b border-neutral-200">
          Contact
        </Link>
        <Link href="/booknow" onClick={onClose}>
          <Button className="bg-primary hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-full transition shadow-md text-center mt-2 w-full">
            Book Now
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
