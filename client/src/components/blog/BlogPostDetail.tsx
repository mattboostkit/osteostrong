import { BlogPost } from "@/types/sanity";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";

interface BlogPostDetailProps {
  post: BlogPost;
}

const BlogPostDetail = ({ post }: BlogPostDetailProps) => {
  if (!post) return <div>Loading...</div>;

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-6">
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          )}
          {post.categories && post.categories.length > 0 && (
            <>
              <span className="mx-2">•</span>
              <span className="text-primary font-medium">
                {post.categories.join(", ")}
              </span>
            </>
          )}
        </div>
        {post.author && (
          <div className="flex items-center">
            {post.authorImage && (
              <img
                src={urlFor(post.authorImage).width(40).height(40).url()}
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
            )}
            <span className="font-medium">By {post.author.name}</span>
          </div>
        )}
      </header>

      {post.mainImage && (
        <div className="mb-8">
          <img
            src={urlFor(post.mainImage).width(1200).height(675).url()}
            alt={post.mainImage?.alt || post.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="prose max-w-none">
        {post.body ? (
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({value}) => (
                  <img
                    src={urlFor(value).width(800).url()}
                    alt={value.alt || 'Blog image'}
                    className="my-8 rounded-lg shadow-md"
                  />
                ),
              },
              marks: {
                link: ({children, value}) => {
                  const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
                  return (
                    <a href={value.href} rel={rel} className="text-primary hover:underline">
                      {children}
                    </a>
                  );
                },
              },
            }}
          />
        ) : (
          <p>This post has no content.</p>
        )}
      </div>
    </article>
  );
};

export default BlogPostDetail;
