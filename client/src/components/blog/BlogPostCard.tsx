import { Link } from "wouter";
import { BlogPost } from "@/types/sanity";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="cursor-pointer">
          {post.mainImage && (
            <img
              src={urlFor(post.mainImage).width(600).height(340).url()}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-500">
                {post.publishedAt ? formatDate(post.publishedAt) : "No date"}
              </span>
              {post.categories && post.categories.length > 0 && (
                <>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-primary font-medium">
                    {post.categories[0]}
                  </span>
                </>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
            {post.excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            )}
            <div className="flex items-center">
              {post.author && (
                <span className="text-sm text-gray-500">By {post.author}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
