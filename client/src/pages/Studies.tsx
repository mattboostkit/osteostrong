import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { client, getStudyPageImages } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

// Define the Study type based on Sanity schema
interface Study {
  _id: string;
  title: string;
  journal?: string;
  publishDate?: string;
  description?: string;
  pdfUrl?: string;
}

// Component to fetch and display studies from Sanity
const PeerReviewedStudies = () => {
  const { data: studies, isLoading, error } = useQuery<Study[]>({
    queryKey: ['peerReviewedStudies'],
    queryFn: async () => {
      try {
        const query = `*[_type == "peerReviewedStudy"] | order(publishDate desc) {
          _id,
          title,
          journal,
          publishDate,
          description,
          "pdfUrl": pdfFile.asset->url
        }`;
        
        return await client.fetch(query);
      } catch (err) {
        console.error("Error fetching studies:", err);
        throw new Error("Failed to load studies. Please try again later.");
      }
    },
  });

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading studies. Please try again later.
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-primary">Peer-Reviewed</span> Research Studies
        </h2>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="h-48">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-32" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : studies && studies.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {studies.map((study) => (
              <Card key={study._id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
                <Link href={`/science-and-studies/${study._id}`} className="flex flex-col h-full">
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    {study.journal && (
                      <CardDescription className="font-medium">
                        {study.journal}
                      </CardDescription>
                    )}
                    {study.publishDate && (
                      <p className="text-sm text-muted-foreground">
                        Published: {formatDate(study.publishDate)}
                      </p>
                    )}
                  </CardHeader>
                  {study.description && (
                    <CardContent className="flex-grow">
                      <p className="text-sm line-clamp-3">{study.description}</p>
                    </CardContent>
                  )}
                  <CardFooter>
                    <div className="text-primary hover:underline font-medium flex items-center">
                      <span>View Full Study</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                  </CardFooter>
                </Link>
                {study.pdfUrl && (
                  <div className="pb-4 px-6 -mt-2">
                    <a 
                      href={study.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary hover:underline flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 mr-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                        />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No studies found.</p>
        )}
      </div>
    </section>
  );
};

const Studies = () => {
  const pageTitle = "Peer-Reviewed Research & Studies | OsteoStrong Tunbridge Wells";
  const pageDescription = "Explore peer-reviewed research studies and scientific evidence related to OsteoStrong's impact on bone density, strength, and overall wellness.";
  const pageUrl = "https://www.osteostrongtw.co.uk/science-and-studies";
  const ogImageUrl = "https://www.osteostrongtw.co.uk/images/og-image.jpg";

  const { data: studyImages, isLoading: imagesLoading } = useQuery({
    queryKey: ['studyPageImages'],
    queryFn: async () => {
      try {
        return await getStudyPageImages();
      } catch (err) {
        console.error("Error fetching study page images:", err);
        return null;
      }
    },
  });

  // Meta tags for the main Studies page
  const helmet = (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:url" content={pageUrl} />
    </Helmet>
  );

  // Helper component to handle image display with loading state
  const StudyImage = ({ 
    image, 
    alt, 
    className = "" 
  }: { 
    image?: any; 
    alt: string; 
    className?: string 
  }) => {
    if (imagesLoading) {
      return (
        <div className={`bg-neutral-200 flex items-center justify-center rounded-xl mb-4 ${className}`}>
          <Skeleton className="w-full h-full" />
        </div>
      );
    }

    if (!image?.asset?._ref) {
      return (
        <div className={`bg-neutral-200 flex items-center justify-center rounded-xl mb-4 ${className}`}>
          <span className="text-neutral-500">[{alt} Placeholder]</span>
        </div>
      );
    }

    return (
      <img 
        src={urlFor(image).width(800).url()} 
        alt={alt}
        className={`w-full h-auto rounded-xl mb-4 ${className}`}
      />
    );
  };

  return (
  <>
    <Helmet>
      <title>Science and Studies | OsteoStrong Tunbridge Wells</title>
      <meta name="description" content="Explore the science, research, and peer-reviewed studies behind OsteoStrong's effectiveness for bone health, strength, and mobility." />
      <link rel="canonical" href="https://www.osteostrongtw.co.uk/science-and-studies/" />
      {/* Open Graph Tags */}
      <meta property="og:title" content="Science and Studies | OsteoStrong Tunbridge Wells" />
      <meta property="og:description" content="Explore the science, research, and peer-reviewed studies behind OsteoStrong's effectiveness for bone health, strength, and mobility." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.osteostrongtw.co.uk/science-and-studies/" />
      <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Science and Studies | OsteoStrong Tunbridge Wells" />
      <meta name="twitter:description" content="Explore the science, research, and peer-reviewed studies behind OsteoStrong's effectiveness for bone health, strength, and mobility." />
      <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />
      <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/science-and-studies/" />
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
            <StudyImage 
              image={studyImages?.boneDensityImage} 
              alt="Bone Density Analysis Graph"
              className="max-w-md h-64 object-cover"
            />
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
            <StudyImage 
              image={studyImages?.strengthGainImage} 
              alt="Strength Gain Analysis Graph"
              className="max-w-md h-48 object-cover"
            />
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
            <StudyImage 
              image={studyImages?.balanceImage} 
              alt="Balance Improvement Graph"
              className="max-w-md h-56 object-cover"
            />
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
            <StudyImage 
              image={studyImages?.diabetesImage} 
              alt="Type 2 Diabetes Research Graph"
              className="max-w-md h-40 object-cover"
            />
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
          Dr Nektaria Papadopoulou, Endocronologist, EMD, PhD, Researcher<br/>
          Dr George Chrousos, Endocronologist, MD, FAAP, MACP, MACE, MD (Hon)
        </p>
      </div>
    </section>
    
    {/* Peer Reviewed Studies Section */}
    <PeerReviewedStudies />
  </>
  );
};

export default Studies;
