import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

const Footer = () => {

  return (
    <footer className="bg-[#3B3B3B] text-white py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="max-w-[180px] md:max-w-[220px]">
              <Logo variant="alt" size="medium" className="mb-3" />
            </div>
            <p className="mb-4">
              OsteoStrong is a revolutionary approach to improving bone density, strength, balance and posture in just one 15-minute session per week.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/osteostrongtunbridgewells" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/osteostrongtunbridgewells/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/osteostrong/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@osteostrong/videos" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@osteostrongtw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-300 hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-primary transition">About</Link></li>
              <li><Link href="/#services" className="text-neutral-300 hover:text-primary transition">Services</Link></li>
              <li><Link href="/#locations" className="text-neutral-300 hover:text-primary transition">Locations</Link></li>
              <li><Link href="/#testimonials" className="text-neutral-300 hover:text-primary transition">Testimonials</Link></li>
              <li><Link href="/#faq" className="text-neutral-300 hover:text-primary transition">FAQ</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-neutral-300 hover:text-primary transition">OsteoStrong Session</Link></li>
              <li><Link href="/programs" className="text-neutral-300 hover:text-primary transition">Performance Assessment</Link></li>
              <li><Link href="/programs" className="text-neutral-300 hover:text-primary transition">PEMF Therapy</Link></li>
              <li><Link href="/programs" className="text-neutral-300 hover:text-primary transition">Compression Boots</Link></li>
              <li><Link href="/programs" className="text-neutral-300 hover:text-primary transition">Red Light Therapy</Link></li>
              <li><Link href="/booknow" className="text-neutral-300 hover:text-primary transition">Book A Free Session</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Affiliations</h3>
            <div className="flex flex-col items-start space-y-4">
              <a href="https://tunbridgewellsbusinessawards.uk/results/" target="_blank" rel="noopener noreferrer" aria-label="Tunbridge Wells Business Association">
                <img 
                  src="https://ik.imagekit.io/boostkit/OsteoStrong/TWBA.webp?updatedAt=1745331992386" 
                  alt="Tunbridge Wells Business Association Logo" 
                  className="h-24 object-contain transition-opacity hover:opacity-80" 
                />
              </a>
              <a href="https://www.thetncard.com/osteostrong" target="_blank" rel="noopener noreferrer" aria-label="TN Card">
                <img 
                  src="https://ik.imagekit.io/boostkit/OsteoStrong/TN_Card.png?updatedAt=1749306955100" 
                  alt="TN Card Logo" 
                  className="h-12 object-contain transition-opacity hover:opacity-80" 
                />
              </a>
            </div>
          </div>

        </div>



        <div className="pt-8 mt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-sm gap-6 md:gap-4">
            {/* Center: Copyright & Company Info */}
            <div className="text-center md:text-left order-1 md:order-2 flex-grow md:flex-grow-0">
              <p className="text-neutral-300">&copy; {new Date().getFullYear()} OsteoStrong UK. All rights reserved.</p>
              <p className="text-xs text-neutral-400 mt-1">Company registered in England and Wales: 14093339</p>
              <p className="text-xs text-neutral-400">Registered address: 26 High Street, Tunbridge Wells, TN1 1UX</p>
            </div>

            {/* Right: Legal Links */}
            <div className="flex space-x-4 order-2 md:order-3">
              <Link href="/privacy-policy" className="text-neutral-300 hover:text-primary transition">Privacy Policy</Link>
              <Link href="/cookie-policy" className="text-neutral-300 hover:text-primary transition">Cookie Policy</Link>
              <Link href="/blog" className="text-neutral-300 hover:text-primary transition">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
