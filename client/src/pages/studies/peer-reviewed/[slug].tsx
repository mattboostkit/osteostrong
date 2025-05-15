import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Helmet } from "react-helmet";
import { client } from "@/lib/sanity";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface PeerReviewedStudy {
  _id: string;
  title: string;
  slug: { current: string };
  journal?: string;
  publishDate?: string;
  description?: string;
  pdf?: { asset: { url: string } };
}

const PeerReviewedStudyPage = () => {
  const [, params] = useRoute("/studies/peer-reviewed/:slug");
  const [study, setStudy] = useState<PeerReviewedStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudy = async () => {
      if (!params?.slug) return;
      try {
        setLoading(true);
        const data = await client.fetch(
          `*[_type == "peerReviewedStudy" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            journal,
            publishDate,
            description,
            pdf { asset->{url} }
          }`,
          { slug: params.slug }
        );
        setStudy(data);
      } catch (err) {
        setError("Could not load this study. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchStudy();
  }, [params?.slug]);

  if (loading) return <div className="container mx-auto py-16 text-center">Loading...</div>;
  if (error) return <div className="container mx-auto py-16 text-center text-red-600">{error}</div>;
  if (!study) return <div className="container mx-auto py-16 text-center">Study not found.</div>;

  return (
    <>
      <Helmet>
        <title>{study.title} | Peer-Reviewed Study | OsteoStrong</title>
        <meta name="description" content={study.description || study.title} />
      </Helmet>
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/studies">
            <Button variant="outline" className="mb-8 bg-white">
              <i className="fas fa-arrow-left mr-2"></i> Back to Peer-Reviewed Studies
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">{study.title}</h1>
          {study.journal && (
            <p className="text-lg text-gray-700 mb-2">Journal: {study.journal}</p>
          )}
          {study.publishDate && (
            <p className="text-lg text-gray-700 mb-2">Published: {study.publishDate}</p>
          )}
          {study.description && (
            <p className="text-lg text-gray-800 mb-6 max-w-2xl">{study.description}</p>
          )}
          {study.pdf?.asset?.url ? (
            <div className="w-full max-w-4xl mx-auto my-8">
              <iframe
                src={study.pdf.asset.url}
                title={study.title}
                width="100%"
                height="800px"
                className="border rounded-lg shadow"
                allow="autoplay"
              />
              <div className="mt-4 text-center">
                <a
                  href={study.pdf.asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-secondary"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ) : (
            <div className="text-gray-600">No PDF available for this study.</div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PeerReviewedStudyPage;
