import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Helmet } from "react-helmet";
import { getPostBySlug, urlFor } from "@/lib/sanity";
import { BlogPost } from "@/types/sanity";
import BlogPostDetail from "@/components/blog/BlogPostDetail";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const BlogPostPage = () => {
  const [, params] = useRoute("/blog/:slug");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!params?.slug) return;
      
      try {
        setLoading(true);
        const postData = await getPostBySlug(params.slug);
        setPost(postData);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load the blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Error</h1>
          <p className="text-xl mb-8">{error || "Post not found"}</p>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-yellow-400 text-black font-bold">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | OsteoStrong Blog</title>
        <meta name="description" content={post.excerpt || `Read about ${post.title} on the OsteoStrong blog`} />
        <meta property="og:title" content={`${post.title} | OsteoStrong Blog`} />
        <meta property="og:description" content={post.excerpt || `Read about ${post.title} on the OsteoStrong blog`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.osteostrongtw.co.uk/blog/${post.slug.current}`} />
        {post.mainImage && (
          <meta property="og:image" content={urlFor(post.mainImage).width(1200).height(630).url()} />
        )}
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | OsteoStrong Blog`} />
        <meta name="twitter:description" content={post.excerpt || `Read about ${post.title} on the OsteoStrong blog`} />
        {post.mainImage && (
          <meta name="twitter:image" content={urlFor(post.mainImage).width(1200).height(630).url()} />
        )}
        <meta name="twitter:url" content={`https://www.osteostrongtw.co.uk/blog/${post.slug.current}`} />
        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.osteostrongtw.co.uk/blog/${post.slug.current}`} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.osteostrongtw.co.uk/blog/${post.slug.current}`
            },
            "headline": post.title,
            "description": post.excerpt || post.title, // Fallback to title if excerpt is missing
            "image": post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : 'https://www.osteostrongtw.co.uk/images/og-image.jpg', // Fallback OG image
            "datePublished": post.publishedAt ? new Date(post.publishedAt).toISOString() : '',
            "dateModified": post._updatedAt ? new Date(post._updatedAt).toISOString() : (post.publishedAt ? new Date(post.publishedAt).toISOString() : ''),
            "author": {
              "@type": "Person", // Assuming individual author, change to Organization if needed
              "name": post.author?.name || "OsteoStrong Tunbridge Wells"
            },
            "publisher": {
              "@type": "Organization",
              "name": "OsteoStrong Tunbridge Wells",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.osteostrongtw.co.uk/images/logo-for-schema.png" // Replace with actual logo URL
              }
            },
            "url": `https://www.osteostrongtw.co.uk/blog/${post.slug.current}`
          })}
        </script>
      </Helmet>

      <div className="py-10 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/blog">
            <Button variant="outline" className="mb-6 bg-white">
              <i className="fas fa-arrow-left mr-2"></i> Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <BlogPostDetail post={post} />
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
