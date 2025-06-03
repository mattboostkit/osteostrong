import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Transform Your Health?</h2>
        <p className="text-xl text-black mb-8 max-w-2xl mx-auto font-medium">
          Take the first step towards stronger bones, improved balance, and a more active lifestyle with OsteoStrong.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/booknow">
            <Button>
              Book A Free Session
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="secondary">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
