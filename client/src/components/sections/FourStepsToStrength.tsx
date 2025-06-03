import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const steps = [
  {
    number: 1,
    title: "Upper Growth Trigger",
    videoId: "5IKWnz_e7uQ",
  },
  {
    number: 2,
    title: "Lower Growth Trigger",
    videoId: "NRX-9XVa_Ko",
  },
  {
    number: 3,
    title: "Core Growth Trigger",
    videoId: "rSgYEEJVNpo",
  },
  {
    number: 4,
    title: "Postural Growth Trigger",
    videoId: "vljdjK8oJGE",
  },
];

const FourStepsToStrength = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Four Steps to Strength
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Follow the four-device circuit just once per week and experience
            increased skeletal strength and bone density. The best part? It
            only takes 20 minutes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-primary p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-between"
            >
              {/* Card Content (Number, Title) */}
              <div>
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-black">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {step.title}
                </h3>

              </div>

              {/* Dialog for this step's video popup */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-auto bg-white hover:bg-neutral-100 text-black font-medium py-2 px-4 rounded-md group">
                    Learn more{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                    >
                      &rarr;
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[calc(100vw-2rem)] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-0 bg-black border-none overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${step.videoId}?autoplay=1&rel=0`}
                      title={step.title} // Using step.title for accessibility
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourStepsToStrength;
