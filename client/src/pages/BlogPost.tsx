import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Helmet } from "react-helmet";
import { getPostBySlug } from "@/lib/sanity";
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
          <meta property="og:image" content={`https://cdn.sanity.io/images/6ff7gi0z/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')}`} />
        )}
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
