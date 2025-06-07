import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/lib/sanity";

// Define the Study type based on Sanity schema
interface Study {
  _id: string;
  title: string;
  journal?: string;
  publishDate?: string;
  description?: string;
  pdfUrl?: string;
  _updatedAt?: string;
  fullContent?: any; // For future rich text content
}

const StudyDetail = () => {
  const [match, params] = useRoute("/science-and-studies/:studyId");
  const studyId = params?.studyId;
  
  const { data: study, isLoading, error } = useQuery<Study>({
    queryKey: ['study', studyId],
    queryFn: async () => {
      try {
        const query = `*[_type == "peerReviewedStudy" && _id == $studyId][0] {
          _id,
          title,
          journal,
          publishDate,
          description,
          "pdfUrl": pdfFile.asset->url,
          _updatedAt,
          // Add any additional fields you want to include
        }`;
        
        const params = { studyId };
        return await client.fetch(query, params);
      } catch (err) {
        console.error("Error fetching study:", err);
        throw new Error("Failed to load study. Please try again later.");
      }
    },
  });

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-red-500 mb-4">Error loading study. Please try again later.</div>
        <Link href="/science-and-studies">
          <Button variant="outline">Back to Studies</Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Skeleton className="h-10 w-3/4 mb-6" />
        <Skeleton className="h-6 w-1/2 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Study not found</h1>
        <p className="mb-6">The requested study could not be found.</p>
        <Link href="/science-and-studies">
          <Button>Back to Studies</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{study.title} | OsteoStrong Research</title>
        <meta name="description" content={study.description || 'Peer-reviewed research study on OsteoStrong'} />
        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.osteostrongtw.co.uk/science-and-studies/${study._id}`} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${study.title} | OsteoStrong Research`} />
        <meta property="og:description" content={study.description || 'Peer-reviewed research study on OsteoStrong'} />
        <meta property="og:type" content="article" /> {/* Consider 'report' if more appropriate */}
        <meta property="og:url" content={`https://www.osteostrongtw.co.uk/science-and-studies/${study._id}`} />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${study.title} | OsteoStrong Research`} />
        <meta name="twitter:description" content={study.description || 'Peer-reviewed research study on OsteoStrong'} />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />
        <meta name="twitter:url" content={`https://www.osteostrongtw.co.uk/science-and-studies/${study._id}`} />

        {/* JSON-LD Structured Data for ScholarlyArticle */}
        <script type="application/ld+json">
          {(() => {
            const scholarlyArticle: any = {
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.osteostrongtw.co.uk/science-and-studies/${study._id}`
              },
              "headline": study.title,
              "description": study.description || study.title,
              "image": "https://www.osteostrongtw.co.uk/images/og-image.jpg",
              "datePublished": study.publishDate ? new Date(study.publishDate).toISOString() : '',
              "dateModified": study._updatedAt ? new Date(study._updatedAt).toISOString() : (study.publishDate ? new Date(study.publishDate).toISOString() : ''),
              "author": {
                "@type": "Organization",
                "name": "OsteoStrong Research"
              },
              "publisher": {
                "@type": "Organization",
                "name": "OsteoStrong Tunbridge Wells",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.osteostrongtw.co.uk/images/logo-for-schema.png"
                }
              },
              "url": `https://www.osteostrongtw.co.uk/science-and-studies/${study._id}`
            };

            if (study.journal) {
              scholarlyArticle.isPartOf = {
                "@type": "PublicationVolume",
                "name": study.journal
              };
            }

            if (study.pdfUrl) {
              scholarlyArticle.citation = {
                "@type": "CreativeWork",
                "name": "View Full Study (PDF)",
                "url": study.pdfUrl
              };
            }

            return JSON.stringify(scholarlyArticle);
          })()}
        </script>
      </Helmet>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/science-and-studies" className="inline-block mb-6">
            <Button variant="ghost" className="pl-0">
              ← Back to Studies
            </Button>
          </Link>
          
          <Card>
            <CardHeader>
              <h1 className="text-2xl md:text-3xl font-semibold leading-none tracking-tight text-gray-900">{study.title}</h1>
              {study.journal && (
                <CardDescription className="text-lg font-medium">
                  {study.journal}
                </CardDescription>
              )}
              {study.publishDate && (
                <p className="text-sm text-muted-foreground">
                  Published: {formatDate(study.publishDate)}
                </p>
              )}
            </CardHeader>
            
            <CardContent className="space-y-6">
              {study.description && (
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Study Overview</h3>
                  <p className="text-gray-700">{study.description}</p>
                </div>
              )}

              {study.pdfUrl && (
                <div className="mt-8 pt-6 border-t">
                  <a
                    href={study.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
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
                    View Full Study (PDF)
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default StudyDetail;
