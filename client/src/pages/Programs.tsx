import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import ScrollLink from "@/components/utils/ScrollLink";

// BenefitCard component
const BenefitCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
    <div className="text-4xl mb-3" aria-hidden>{icon}</div>
    <h4 className="font-bold text-lg mb-2 text-black">{title}</h4>
    <p className="text-gray-700 text-base">{desc}</p>
  </div>
);

// TScoreCalculator component
const TScoreCalculator = () => {
  const [tScore, setTScore] = useState(0);

  let classification = "Normal Bone Density";
  let bgClass = "bg-green-500";
  let textClass = "text-white";
  let borderClass = "border-green-600";
  if (tScore < -2.4) {
    classification = "Osteoporosis";
    bgClass = "bg-red-600";
    textClass = "text-white";
    borderClass = "border-red-700";
  } else if (tScore < -1.0) {
    classification = "Osteopenia (Low Bone Density)";
    bgClass = "bg-yellow-400";
    textClass = "text-gray-900";
    borderClass = "border-yellow-600";
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-6">
        <input
          type="range"
          min={-4}
          max={2}
          step={0.1}
          value={tScore}
          onChange={e => setTScore(parseFloat(e.target.value))}
          className="w-full md:w-2/3 accent-primary h-2 rounded-lg appearance-none bg-white/30 outline-none"
          aria-label="T-score slider"
        />
        <div
          className={`tscore-display rounded-2xl px-8 py-6 text-3xl font-extrabold shadow-lg transition-all duration-300 mb-2 border-4 ${bgClass} ${textClass} ${borderClass}`}
          aria-live="polite"
        >
          <span className="block text-5xl font-black mb-2">{tScore.toFixed(1)}</span>
          <span className="block text-xl font-bold tracking-wide">{classification}</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div className={`bone flex flex-col items-center rounded-xl p-4 shadow-md transition-transform duration-200 ${tScore >= -1.0 ? 'scale-110 ring-2 ring-green-400' : 'bg-white'}`}>
          <span className="text-3xl mb-2" role="img" aria-label="Strong bone">🦴</span>
          <h5 className="font-bold text-green-700 mb-1">Strong Bones</h5>
          <span className="font-bold text-green-700 text-base">T-score: -1.0 and above</span>
        </div>
        <div className={`bone flex flex-col items-center rounded-xl p-4 shadow-md transition-transform duration-200 ${tScore < -1.0 && tScore >= -2.4 ? 'scale-110 ring-2 ring-yellow-400' : 'bg-white'}`}>
          <span className="text-3xl mb-2" role="img" aria-label="Osteopenia bone">🦴</span>
          <h5 className="font-bold text-yellow-600 mb-1">Osteopenia</h5>
          <span className="font-bold text-yellow-600 text-base">T-score: -1.1 to -2.4</span>
        </div>
        <div className={`bone flex flex-col items-center rounded-xl p-4 shadow-md transition-transform duration-200 ${tScore < -2.4 ? 'scale-110 ring-2 ring-red-400' : 'bg-white'}`}>
          <span className="text-3xl mb-2" role="img" aria-label="Osteoporosis bone">🦴</span>
          <h5 className="font-bold text-red-600 mb-1">Osteoporosis</h5>
          <span className="font-bold text-red-600 text-base">T-score: -2.5 and below</span>
        </div>
      </div>
    </div>
  );
};

// Set up a helper function for generating image URLs with the Sanity image pipeline
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const Programs = () => {
  const [programsImage, setProgramsImage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPageImages = async () => {
      try {
        // Direct query instead of using getPageImage function
        const programsImageResult = await client.fetch(`
          *[_type == "pageImage" && page == "programs" && section == "header"][0] {
            _id,
            title,
            page,
            section,
            image,
            alt,
            description
          }
        `);
        console.log('Programs header image from Sanity:', programsImageResult);

        if (programsImageResult && programsImageResult.image) {
          setProgramsImage(programsImageResult);
        }
      } catch (error) {
        console.error("Error fetching page images from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageImages();
  }, []);

  return (
    <>
      <Helmet>
        <title>OsteoStrong Programs | Bone Health, Osteopenia & Osteoarthritis Support in Kent</title>
        <meta name="description" content="Explore OsteoStrong's medicine-free, drug-free programs for bone health, osteopenia, and osteoarthritis in Tunbridge Wells, Tonbridge, Sevenoaks, and Kent. Improve your bone density and strength naturally." />
        <meta name="keywords" content="OsteoStrong, bone health, osteoporosis, osteopenia, osteoarthritis, medicine-free, drug-free, Tunbridge Wells, Tonbridge, Sevenoaks, Kent, skeletal strength, osteogenic loading" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/programs" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/programs" />
        <meta property="og:title" content="Programs | OsteoStrong Tunbridge Wells" />
        <meta property="og:description" content="Explore the OsteoStrong programs in Tunbridge Wells, including our core skeletal strengthening sessions, Whole Body Vibration, PEMF therapy, compression boots, and red light therapy." />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/programs" />
        <meta name="twitter:title" content="Programs | OsteoStrong Tunbridge Wells" />
        <meta name="twitter:description" content="Explore the OsteoStrong programs in Tunbridge Wells, including our core skeletal strengthening sessions, Whole Body Vibration, PEMF therapy, compression boots, and red light therapy." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Programs</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover our range of specialised programs designed to improve your skeletal strength, overall health, and quality of life
          </p>
        </div>
      </section>

      {/* Programs Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-neutral-100 rounded-xl overflow-hidden shadow-md" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="relative overflow-hidden" style={{ width: '720px', height: '541px', maxWidth: '100%' }}>
                {isLoading ? (
                  <div className="flex justify-center items-center h-full bg-neutral-200">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : programsImage && programsImage.image ? (
                  <img
                    src={urlFor(programsImage.image).width(720).height(541).url()}
                    alt={programsImage.alt || "OsteoStrong Tunbridge Wells Programs"}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      console.error(`Failed to load Sanity image for programs section`);
                      e.currentTarget.src = 'https://cdn.sanity.io/images/6ff7gi0z/production/7a2f8a412537569cdd8abae4b6ca8f82df0e6e8b-720x541.jpg';
                    }}
                  />
                ) : (
                  <img
                    src="https://cdn.sanity.io/images/6ff7gi0z/production/7a2f8a412537569cdd8abae4b6ca8f82df0e6e8b-720x541.jpg"
                    alt="OsteoStrong Tunbridge Wells Programs"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/720x541?text=OsteoStrong+Tunbridge+Wells+Programs';
                    }}
                  />
                )}
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-black mb-2">Our Revolutionary Programs</h2>
                <p className="text-gray-700">{programsImage?.description || "Discover how our specialised programs can help you build strength, improve bone density, and enhance your overall health."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Transform Your Health With OsteoStrong</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              At OsteoStrong Tunbridge Wells, we offer a range of programs designed to help you build skeletal strength, improve bone density, enhance athletic performance, and reduce joint and back pain. All our programs are based on osteogenic loading, a scientifically-proven approach that triggers the body's natural adaptive response to build stronger bones and muscles.
            </p>
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Program 1 */}
            <Card className="overflow-hidden">
              <img
                src="https://cdn.sanity.io/images/6ff7gi0z/production/230c01892689ba675a3e1d0c5a7860a24ff3c027-2500x1668.webp"
                alt="Core OsteoStrong Session"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Core OsteoStrong Session</h3>
                <p className="text-gray-700 mb-6">
                  Our flagship program consists of a 15-minute session once per week, where you'll use our specialised equipment to safely apply the precise forces needed to stimulate bone growth and muscle strength. Each session is guided by our expert coaches who will ensure you're using the correct technique to maximise results.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Improved bone density</li>
                    <li>Increased skeletal strength</li>
                    <li>Enhanced muscle strength</li>
                    <li>Better balance and posture</li>
                    <li>Reduced joint and back pain</li>
                  </ul>
                </div>
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book Your Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 2 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/Core%20OsteoStrong%20Session.jpg?updatedAt=1745330681219" 
                alt="Whole Body Vibration"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Whole Body Vibration</h3>
                <p className="text-gray-700 mb-6">
                  Power Plate Whole Body Vibration is used to activate your body and your nervous system at the beginning and at the end of your session. This helps opens new neural pathways, to improve proprioception for better stability and muscle and joint health.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Improved balance</li>
                    <li>Improved circulation</li>
                    <li>Improved Joint Health</li>
                    <li>Improved Muscle Health</li>
                    <li>Improved Bone Health</li>
                  </ul>
                </div>
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book A Free Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 3 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/PEMF.jpg?updatedAt=1745330681123"
                alt="PEMF Therapy"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Pulsed Electromagnetic Field (PEMF) Therapy</h3>
                <p className="text-gray-700 mb-6">
                  Our advanced PEMF therapy uses electromagnetic fields to stimulate cellular repair, reduce inflammation, and accelerate healing processes. This non-invasive treatment can help with pain management, recovery, and overall cellular health.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Reduced pain and inflammation</li>
                    <li>Enhanced cellular regeneration</li>
                    <li>Improved circulation</li>
                    <li>Accelerated recovery from injury</li>
                    <li>Complementary to OsteoStrong sessions</li>
                  </ul>
                </div>
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book A Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 4 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/Compression%20Boots.jpg?updatedAt=1745330681403"
                alt="Compression Boots"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Compression Boots</h3>
                <p className="text-gray-700 mb-6">
                  Our compression boot therapy enhances circulation, reduces muscle soreness, and speeds up recovery after physical activity. This dynamic compression system helps flush out metabolic waste and reduce inflammation in the legs.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Accelerated recovery time</li>
                    <li>Reduced muscle fatigue and soreness</li>
                    <li>Enhanced lymphatic drainage</li>
                    <li>Improved circulation</li>
                    <li>Reduces stiffness and muscle tension</li>
                    <li>Ideal for athletes and active individuals</li>
                  </ul>
                </div>
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book A Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 5 */}
            <Card className="overflow-hidden">
              <img
                src="https://ik.imagekit.io/boostkit/OsteoStrong/RLT.jpg?updatedAt=1745330681266"
                alt="Red Light Therapy"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Red Light Therapy</h3>
                <p className="text-gray-700 mb-6">
                  Our red light therapy uses specific wavelengths of red and near-infrared light to promote cellular energy production, tissue repair, and reduced inflammation. This non-invasive treatment can help with skin rejuvenation, pain management, and overall cellular health.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Skin rejuvenation and collagen production</li>
                    <li>Reduced joint pain and inflammation</li>
                    <li>Enhanced cellular function and energy</li>
                    <li>Improved tissue healing</li>
                    <li>Reduces Inflammation</li>
                    <li>Improves blood circulation</li>
                    <li>Enhances Recovery and Healing</li>
                    <li>Complementary to OsteoStrong sessions</li>
                  </ul>
                </div>
                <Link href="/booknow">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Book A Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 6 */}
            <Card className="overflow-hidden">
              <img
                src="https://cdn.sanity.io/images/6ff7gi0z/production/c864edfae596df6a5a4b373d5746dfa993e522b2-2500x1668.webp"
                alt="Corporate Packages"
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Corporate Packages</h3>
                <p className="text-gray-700 mb-6">
                  Our corporate wellness packages are designed to improve the health, wellbeing, and productivity of your team. We offer group sessions at our Tunbridge Wells centre or can arrange on-site services for larger organisations in the area.
                </p>
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-black mb-2">Corporate benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Reduced absenteeism due to injury or illness</li>
                    <li>Improved employee energy and productivity</li>
                    <li>Enhanced team morale and wellbeing</li>
                    <li>Customisable packages for any size organisation</li>
                    <li>Educational workshops and health seminars</li>
                  </ul>
                </div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition shadow-md w-full">
                    Enquire About Corporate Packages
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Understanding Your T-Score Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Understanding Your T-Score</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">Your bone density results explained simply and clearly</p>
          </div>
          {/* Interactive T-Score Calculator */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-2">Interactive T-Score Calculator</h3>
            <p className="mb-6">Move the slider below to see how different T-scores are classified:</p>
            <TScoreCalculator />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-4">What is a T-Score?</h3>
              <p className="text-gray-700 mb-4">A T-score is a measurement that compares your bone density to that of a healthy 30-year-old adult of the same gender. It's expressed as a number of standard deviations above or below the average.</p>
              <p className="text-gray-700"><span className="font-semibold">Why 30 years old?</span> This is when peak bone mass is typically achieved, making it the gold standard for comparison.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Reading Your Results</h3>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                  <span className="font-bold">Normal:</span> T-score of -1.0 and above<br />Your bones are strong and healthy
                </div>
                <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50 rounded">
                  <span className="font-bold">Osteopenia:</span> T-score between -1.1 and -2.4<br />Lower than normal bone density, but not osteoporosis
                </div>
                <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded">
                  <span className="font-bold">Osteoporosis:</span> T-score of -2.5 and below<br />Significantly low bone density with increased fracture risk
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-black mb-4">How OsteoStrong Can Improve Your T-Score</h3>
            <p className="text-gray-700 mb-8">OsteoStrong uses specialised equipment and protocols designed to trigger your body's natural bone-building response through safe, controlled loading.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <BenefitCard icon="💪" title="Osteogenic Loading" desc="Scientifically proven to stimulate bone growth through controlled, high-impact forces that are safe for all ages and fitness levels." />
              <BenefitCard icon="⚡" title="Fast & Effective" desc="Just 15 minutes once a week can help improve bone density, strength, and overall skeletal health." />
              <BenefitCard icon="🎯" title="Targeted Results" desc="Focus on the exact areas where you need improvement based on your DEXA scan results and T-scores." />
              <BenefitCard icon="🛡️" title="Safe for Everyone" desc="No risk of injury with our bio-mechanically correct equipment and trained specialists guiding every session." />
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary animate-pulse">9.7%</div>
                <div className="text-gray-700">Average spine density increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary animate-pulse">8.1%</div>
                <div className="text-gray-700">Average hip density increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary animate-pulse">12</div>
                <div className="text-gray-700">Months to see significant results</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booknow">
                <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition shadow-md">
                  Schedule Your Free Session
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" className="bg-white hover:bg-neutral-200 text-black font-bold py-3 px-8 rounded-full transition shadow-md">
                  Learn More About OsteoStrong
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-4">Take Action Today</h3>
            <p className="text-gray-700 mb-4">Don't let poor bone density control your future. Whether your T-score shows normal bones that you want to keep strong, osteopenia that you want to reverse, or osteoporosis that needs immediate attention, OsteoStrong has a solution.</p>
            <p className="text-gray-700 font-semibold mb-6">Ready to improve your T-score? Contact OsteoStrong Tunbridge Wells today to learn how our unique approach can help you build stronger, denser bones naturally.</p>
            <div className="flex justify-center">
              <Link href="/locations">
                <Button className="bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition shadow-md">
                  Schedule Your Free Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership section moved to Pricing page. */}

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8">
            Take the first step towards stronger bones, improved muscle strength, and better overall health with OsteoStrong.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/booknow">
              <Button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition shadow-md text-center">
                Book A Free Session
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="bg-white hover:bg-neutral-100 text-black font-bold py-2 px-6 rounded-full transition shadow-md text-center">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-lg text-gray-700 font-semibold">
            We support people from Tunbridge Wells, Tonbridge, Sevenoaks, and all of Kent seeking medicine-free, drug-free help for osteopenia, osteoarthritis, and bone health.
          </p>
        </div>
      </section>
    </>
  );
};

export default Programs;