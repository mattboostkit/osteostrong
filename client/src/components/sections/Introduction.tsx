import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "fas fa-bone",
    title: "Stronger Bones",
    description: "Improve bone mineral density and reduce the risk of osteoporosis with our revolutionary approach."
  },
  {
    icon: "fas fa-dumbbell",
    title: "Increased Strength",
    description: "Experience significant strength improvements in just one 10-minute session per week."
  },
  {
    icon: "fas fa-balance-scale",
    title: "Better Balance",
    description: "Improve your posture and balance to prevent falls and enhance everyday movement."
  },
  {
    icon: "fas fa-heartbeat",
    title: "Pain Reduction",
    description: "Many members report reduced joint and back pain after consistent OsteoStrong sessions."
  }
];

const Introduction = () => {
  return (
    <section id="learn-more" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What is OsteoStrong?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OsteoStrong is a unique system that helps you develop stronger bones, improved strength, and better balance, while reducing joint and back pain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-neutral-100 rounded-xl transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
