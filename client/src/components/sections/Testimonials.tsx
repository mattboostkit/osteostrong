import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member for 2 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    quote: "Since starting OsteoStrong, my bone density has increased by 14.7% in just 18 months. At 68, I'm stronger than I've been in decades, and my balance has improved significantly. I no longer fear falls like I used to.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Member for 1 year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    quote: "As a former athlete with chronic back pain, I've tried everything. OsteoStrong is the only treatment that has provided lasting relief. My pain has reduced by about 80%, and I've regained mobility I thought was lost forever.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Member for 6 months",
    image: "https://images.unsplash.com/photo-1551611397-9a91bcb0203c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    quote: "After being diagnosed with osteopenia, I was desperate for a solution that didn't involve medication. Six months with OsteoStrong, and my follow-up tests showed significant improvement. Plus, it only takes 10 minutes a week!",
    rating: 4.5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our Members Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our members who have experienced remarkable improvements in their health and quality of life through OsteoStrong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-md">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 flex text-primary">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt"></i>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
