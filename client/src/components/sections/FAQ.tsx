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
    question: "How does OsteoStrong® work?",
    answer: "OsteoStrong works through a cutting-edge, science-based method called osteogenic loading, which is designed to improve bone density, strength, balance, and overall musculoskeletal health. It is a non-invasive, drug-free system that uses specialised equipment to trigger the body's natural adaptive responses. OsteoStrong machines are designed to apply safe, high-intensity forces to the skeletal system. This mimics the impact forces experienced in activities like jumping or sprinting, which stimulate bone growth. Unlike traditional exercises, the equipment allows you to exert forces 4-10 times your body weight safely, which is necessary to trigger bone-building activity."
  },
  {
    question: "What does a typical OsteoStrong session entail?",
    answer: "A typical OsteoStrong session is a short, focused, and efficient experience designed to improve bone density, muscle strength, balance, and overall musculoskeletal health. Each session takes about 15–20 minutes and is guided by a trained session coach who ensures proper form and provides feedback."
  },
  {
    question: "Why couldn't I just do this at the gym?",
    answer: "While gym workouts are beneficial for overall health and fitness, OsteoStrong offers unique advantages that are difficult to replicate with traditional gym exercises. OsteoStrong uses specialised equipment to safely deliver osteogenic loading (high-impact forces that stimulate bone growth) without the risks of heavy weights or traditional high-impact activities like jumping. In a gym, replicating these forces would require intense, high-risk activities that could lead to injury, especially for individuals with osteoporosis, joint issues, or limited mobility. OsteoStrong sessions are designed to deliver maximum skeletal and muscular benefits in just 10–15 minutes per week. In contrast, a gym routine typically requires multiple hours per week to achieve similar strength gains, and it does not specifically target bone density in the same way."
  },
  {
    question: "What does OsteoStrong cost?",
    answer: "OsteoStrong memberships start at £145 per month, with pricing depending on the wellness modalities included in your plan. Every membership comes with access to a coach on a 1-1 basis, a personalised programme tailored to your goals, baseline marker tracking to monitor progress, and additional member benefits. To find the best option for you, we invite you to visit us for a complimentary session to experience OsteoStrong and discuss your goals with our team."
  },
  {
    question: "How will you track my progress?",
    answer: "We do an ultrasound heel bone scan when you get started so we know your starting bone density T-Score enabling us to accurately track your progress. This is one of four baseline markers we establish at the beginning of your OsteoStrong journey to closely track your progress, we also do two strength tests, and a balance test. The Spectrum devices also record all your sessions and generate reports for you to see and track your progress over time."
  },
  {
    question: "Can I do other exercises with OsteoStrong?",
    answer: "Yes, you can absolutely do other exercises alongside OsteoStrong sessions! In fact, combining OsteoStrong with other forms of physical activity can enhance your overall health and fitness. However, it's important to approach your exercise routine with consideration for how OsteoStrong impacts your body. OsteoStrong focuses on skeletal and muscular strength. Adding other exercises can improve flexibility, cardiovascular health, and endurance."
  },
  {
    question: "When can I expect to see results?",
    answer: "The time it takes to see results from OsteoStrong depends on your individual health goals, current condition, and consistency with the program. However, most members begin noticing benefits within a few weeks to a few months, with significant improvements typically seen over a longer period. Typically in the first 4-8 weeks many members report better balance and coordination, as well as reduced joint and back pain and increased energy levels. While it takes time for bone remodeling, initial increases in bone density may begin around the 3–6 month mark, as osteoblasts (bone-building cells) are stimulated consistently."
  },
  {
    question: "Why can't I do sessions more than once per week?",
    answer: "OsteoStrong sessions are designed to maximise skeletal strength and overall musculoskeletal health through a process called osteogenic loading. This method involves applying high-impact forces to stimulate bone and muscle growth. The reason sessions are limited to once per week is based on the body's natural recovery and adaptation process. Bone adaptation is slow. When high forces are applied to the skeletal system, microstimulation occurs, prompting bone cells (osteoblasts) to build new bone tissue. This process takes 7-10 days to complete. Overloading too soon can reduce effectiveness."
  },
  {
    question: "Are there any contraindications?",
    answer: "You can not do OsteoStrong sessions if you have any of these conditions: Pregnant (first trimester), Severe Cardiovascular Conditions, Unhealed fractures or dislocations, Active bone cancers or metastatic cancer, Severe Hernias, or Cerebral palsy or other disorders that may impair controlled movements. We always recommend that you have your doctor clearance to do physical activity before starting or resuming OsteoStrong sessions."
  },
  {
    question: "Can I do sessions at other OsteoStrong centres around the world?",
    answer: "Yes, you can attend other OsteoStrong centres around the world to continue your sessions while travelling, but it depends on the policies of the centre you wish to visit. OsteoStrong is a global network, and many locations accommodate visiting members for a few sessions at no additional cost. Provide details in advance and we can make the necessary arrangements. Your progress and performance data are stored in their system, enabling seamless tracking across locations."
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
                <AccordionTrigger className="text-lg font-bold text-black px-6 py-4 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600 text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Connect With Us</h3>
          <p className="text-gray-600 mb-6">Follow OsteoStrong Tunbridge Wells on social media</p>

          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/osteostrongtunbridgewells" target="_blank" rel="noopener noreferrer" className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/osteostrongtunbridgewells/" target="_blank" rel="noopener noreferrer" className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/osteostrong/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.youtube.com/@osteostrong/videos" target="_blank" rel="noopener noreferrer" className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@osteostrongtw" target="_blank" rel="noopener noreferrer" className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brand-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
