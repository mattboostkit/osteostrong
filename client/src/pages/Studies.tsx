import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Studies = () => (
  <>
    <Helmet>
      <title>Science and Studies | OsteoStrong Tunbridge Wells</title>
      <meta name="description" content="Explore the science, research, and peer-reviewed studies behind OsteoStrong's effectiveness for bone health, strength, and mobility." />
      <link rel="canonical" href="https://www.osteostrongtw.co.uk/science-and-studies/" />
    </Helmet>
    {/* Hero Section */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Science and Studies</h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          OsteoStrong is rooted in science, with decades of research and clinical studies supporting its effectiveness in improving bone density, muscle strength, and balance.
        </p>
      </div>
    </section>
    {/* Video Embed Section */}
    <section className="py-4 bg-white">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[1100px] aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="John Jaquish"
            src="https://player.vimeo.com/video/873193054?dnt=1&amp;app_id=122963"
            className="w-full h-full min-h-[320px]"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <p className="text-xl max-w-3xl mx-auto">
          Drawing on principles like Wolff’s Law and advancements in biomechanics, OsteoStrong’s methods are designed to stimulate your body’s natural adaptive responses. Multiple peer-reviewed studies have demonstrated the impact of osteogenic loading on bone health and overall musculoskeletal performance, providing a safe and proven solution for combating conditions like osteoporosis, improving mobility, and enhancing physical resilience. Explore the science that’s transforming lives worldwide.
        </p>
        <a href="https://calendly.com/freefirstsession-osteostrongtw/30min" target="_blank" rel="noopener noreferrer">
          <Button className="mt-6 bg-black text-white hover:bg-gray-800 font-bold py-3 px-6 rounded-full transition shadow-md">Book a free first session</Button>
        </a>
      </div>
    </section>
    {/* Science Review Section - Custom Layout */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Top Row: Science Review + Bone Density Analysis */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Left: Science Review Title + Image + Caption */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Science</span> <span className="text-black">Review</span>
            </h2>
            {/* Placeholder for Bone Density Bar Graph */}
            <div className="w-full max-w-md h-64 bg-neutral-200 flex items-center justify-center rounded-xl mb-4">
              <span className="text-neutral-500">[Bone Density Bar Graph Placeholder]</span>
            </div>
            <p className="text-xs text-neutral-600 mb-2 text-center md:text-left">
              ANALYSIS FROM 152 PEER REVIEWED STUDIES<br/>
              <span className="italic">*In each of the studies, participants also took Calcium and Vitamin D3 Supplements<br/>American College of Sports Medicine (2009) ACSM's Guidelines for Exercise Testing and Prescription, 8th ed. LWW, Philadelphia PA</span>
            </p>
          </div>
          {/* Right: Bone Density Analysis */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Bone Density Analysis</h3>
            <p className="mb-2">
              After reaching peak bone density at about age 30, most people lose between 1% and 2% of their bone density annually, depending on many lifestyle, medical and nutritional factors.
            </p>
            <p className="mb-2">
              Other factors such as menopause, thyroid conditions, and long-term use of some medications can result in up to 10% bone loss annually for some people.
            </p>
            <p>
              For many people, OsteoStrong has been scientifically demonstrated to reverse bone loss better than conventional exercise, and pharmaceuticals.
            </p>
          </div>
        </div>
        {/* Bottom Row: Strength Gain Analysis + Image */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-16 items-start">
          {/* Left: Strength Gain Analysis */}
          <div className="flex-1 order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Strength Gain Analysis</h3>
            <p className="mb-2">
              OsteoStrong technology has been proven to improve muscle strength and the significant health benefits are similar to heavy weightlifting. It promotes development of fast twitch muscle which is critical for reflexes, necessary for balance, and reducing fall and fracture risk.
            </p>
            <p className="mb-2">
              For athletes, super bone density overcomes neural inhibition plateaus, allowing more muscle growth for high performance explosive action on the track and field.
            </p>
          </div>
          {/* Right: Strength Gain Bar Graph Placeholder + Caption */}
          <div className="flex-1 order-1 md:order-2 flex flex-col items-center md:items-end">
            <div className="w-full max-w-md h-48 bg-neutral-200 flex items-center justify-center rounded-xl mb-4">
              <span className="text-neutral-500">[Strength Gain Bar Graph Placeholder]</span>
            </div>
            <p className="text-xs text-neutral-600 text-center md:text-right">
              ANALYSIS FROM 500 PEOPLE WITH AVERAGE AGE OF 52
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Balance Case Study & Type 2 Diabetes Research Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl flex flex-col gap-16">
        {/* Balance Case Study Results */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          {/* Left: Balance Graph Placeholder */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="w-full max-w-md h-56 bg-neutral-200 flex items-center justify-center rounded-xl mb-4">
              <span className="text-neutral-500">[Balance Improvement Graph Placeholder]</span>
            </div>
            <p className="text-xs text-neutral-600 text-center md:text-left">
              IMPROVEMENT IN BALANCE TEST AFTER THE FIRST 5 SESSIONS
            </p>
          </div>
          {/* Right: Balance Case Study Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Balance Case Study Results</h3>
            <p className="mb-2">
              In 2002 every day 364 Australians were admitted to hospital as a result of a fall. This highlights the importance of developing and maintaining good balance which prevents falls, improves muscle strength and flexibility, sharpens cognitive function, aids in chronic disease management, enhances quality of life, and promotes mobility.
            </p>
            <p>
              This Case Study demonstrates how quickly balance can be improved at OsteoStrong, providing significant benefits for both lifespan and healthspan.
            </p>
          </div>
        </div>
        {/* Type 2 Diabetes Research */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          {/* Left: Type 2 Diabetes Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Type 2 Diabetes Research</h3>
            <p>
              Various reliable and safe treatment strategies exist for managing Diabetes Type 2 and metabolic dysfunction. Fortunately these methods can be employed singularly or in combination to improve effectiveness. Remarkably, as a standalone therapy, as demonstrated by the 2015 UK Study, OsteoStrong demonstrated superior ability to reduce HbA1c levels, a crucial long-term blood glucose measure, outperforming other standard care approaches.
            </p>
          </div>
          {/* Right: Diabetes Graph Placeholder */}
          <div className="flex-1 flex flex-col items-center md:items-end">
            <div className="w-full max-w-md h-40 bg-neutral-200 flex items-center justify-center rounded-xl mb-4">
              <span className="text-neutral-500">[Type 2 Diabetes Bar Graph Placeholder]</span>
            </div>
            <p className="text-xs text-neutral-600 text-center md:text-right">
              DATA COLLECTED FROM PEER REVIEWED CLINICAL STUDIES
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">2023 Greek Study</h2>
        {/* Responsive YouTube Embed */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="536"
              height="302"
              src="https://www.youtube.com/embed/lAgFXo4mmZ0"
              title="Greek OsteoStrong Study 2023"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mb-4 font-semibold">
          OsteoStrong® Improves Bone Mineral Density – Abstract presented at the global Endocrine Society Annual Conference held in Chicago June 2023 – ENDO23.
        </p>
        <p className="mb-2">
          The Study showed a significant improvement of BMD (bone mineral density) in the lumbar spine in people with osteoporosis treated with OsteoStrong® with or without anti-osteoporotic medication. The OsteoStrong® system may have a synergistic effect with anti-osteoporotic medication significantly reducing bone fracture risk.
        </p>
        <p className="mb-2">
          Bone is a live tissue, it’s not a stone, it has cells that respond to both pulling and pushing and OsteoStrong® is a method that uses a certain amount of pressure, usually 4.2 times the body weight, on the bones of the spine and the hip. Osteogenic loading effectively contributes to the enhancement of bone health. The statistically significant results provide evidence of the positive impact of OsteoStrong® in addressing osteoporosis and potentially reducing the risk of fractures.
        </p>
        <p className="mb-2 text-sm text-neutral-600">
          Dr Nektaris Papadopoulou, Endocronologist, EMD, PhD, Researcher<br/>
          Dr George Chrousos, Endocronologist, MD, FAAP, MACP, MACE, MD (Hon)
        </p>
      </div>
    </section>
  </>
);

export default Studies;
