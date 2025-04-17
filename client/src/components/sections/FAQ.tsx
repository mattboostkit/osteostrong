import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is OsteoStrong different from regular exercise?",
    answer: "Unlike traditional exercise that requires multiple sessions weekly, OsteoStrong uses specially designed equipment that allows you to safely create the forces needed to stimulate bone growth in just one 10-minute session per week. OsteoStrong's approach allows you to create significantly more force than you could safely produce in a gym setting."
  },
  {
    question: "Is OsteoStrong suitable for everyone?",
    answer: "OsteoStrong is suitable for people of almost all ages and fitness levels. Our members range from children to individuals in their 90s. The system is also used by people with various health conditions, including osteoporosis, arthritis, and chronic pain. However, we do recommend consulting with your healthcare provider if you have specific medical concerns."
  },
  {
    question: "How quickly will I see results with OsteoStrong?",
    answer: "Many members report feeling improvements in strength and balance within their first few sessions. Most people notice significant improvements within 3-6 months of consistent weekly sessions. Bone density improvements typically take longer to measure but often show in DEXA scans after 6-12 months of regular sessions."
  },
  {
    question: "Do I need to wear special clothing for OsteoStrong sessions?",
    answer: "There is no need for special exercise clothing. You can attend your sessions in your everyday casual or business attire. OsteoStrong sessions do not cause sweating or require a change of clothes, making it convenient to fit into your busy schedule."
  },
  {
    question: "How much does OsteoStrong cost?",
    answer: "OsteoStrong offers various membership options to suit different needs and budgets. We recommend contacting your nearest location for current pricing information, as rates may vary by location. Many members find that the health benefits and potential savings on future medical costs make OsteoStrong a valuable investment in their long-term health."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about OsteoStrong and our revolutionary approach to bone health.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-xl overflow-hidden shadow-md border-none">
                <AccordionTrigger className="text-lg font-bold text-black px-6 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
