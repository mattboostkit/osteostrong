import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { getBlogPosts, getCategories } from "@/lib/sanity";
import { BlogPost as SanityBlogPost } from "@/types/sanity";
import BlogPostCard from "@/components/blog/BlogPostCard";



// Blog categories for filtering (will be replaced with data from Sanity)
const defaultCategories = [
  "All",
  "Science",
  "Performance",
  "Prevention",
  "Success Stories",
  "Nutrition",
  "Research"
];

const Blog = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<SanityBlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Fetch blog posts and categories from Sanity
  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch blog posts
        const postsData = await getBlogPosts();
        setPosts(postsData);

        // Fetch categories
        const categoriesData = await getCategories();
        const categoryTitles = categoriesData.map((cat: any) => cat.title);
        setCategories(["All", ...categoryTitles]);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Failed to load blog content. Please try again later.");
        setCategories(defaultCategories);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts by category
  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.categories?.includes(selectedCategory));

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Helmet>
        <title>OsteoStrong Blog | Bone Health, Osteopenia & Osteoarthritis in Kent</title>
        <meta name="description" content="Read articles on bone health, osteopenia, osteoarthritis, and medicine-free, drug-free wellness from OsteoStrong experts in Tunbridge Wells, Tonbridge, Sevenoaks, and Kent." />
        <meta name="keywords" content="OsteoStrong blog, bone health articles, osteoporosis, osteopenia, osteoarthritis, medicine-free, drug-free, Tunbridge Wells, Tonbridge, Sevenoaks, Kent, wellness tips, skeletal strength" />
        <meta property="og:title" content="OsteoStrong Blog | Bone Health, Osteopenia & Osteoarthritis in Kent" />
        <meta property="og:description" content="Read articles on bone health, osteopenia, osteoarthritis, and medicine-free, drug-free wellness from OsteoStrong experts in Tunbridge Wells, Tonbridge, Sevenoaks, and Kent." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/blog" />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OsteoStrong Blog | Bone Health, Osteopenia & Osteoarthritis in Kent" />
        <meta name="twitter:description" content="Read articles on bone health, osteopenia, osteoarthritis, and medicine-free, drug-free wellness from OsteoStrong experts in Tunbridge Wells, Tonbridge, Sevenoaks, and Kent." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/blog" />
      </Helmet>

      {/* Blog Header */}
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">The OsteoStrong Blog</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Stay updated with the latest insights, research, and success stories about bone health and wellness.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Filter */}
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Blog Posts */}
              <div className="grid gap-8">
                {loading ? (
                  // Loading state
                  <div className="text-center py-12">
                    <p className="text-lg">Loading blog posts...</p>
                  </div>
                ) : error ? (
                  // Error state
                  <div className="text-center py-12">
                    <p className="text-lg text-red-500">{error}</p>
                  </div>
                ) : filteredPosts.length === 0 ? (
                  // No posts found
                  <div className="text-center py-12">
                    <p className="text-lg">No blog posts found in this category.</p>
                  </div>
                ) : (
                  // Display posts
                  currentPosts.map((post) => (
                    <BlogPostCard key={post._id} post={post} />
                  ))
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-1">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => paginate(currentPage - 1)} 
                      disabled={currentPage === 1}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </Button>
                    {Array.from(Array(totalPages).keys()).map(number => (
                      <Button 
                        key={number + 1} 
                        variant={currentPage === number + 1 ? "default" : "outline"} 
                        size="sm" 
                        className="rounded-md"
                        onClick={() => paginate(number + 1)}
                      >
                        {number + 1}
                      </Button>
                    ))}
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => paginate(currentPage + 1)} 
                      disabled={currentPage === totalPages}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Search Articles</h3>
                  <div className="relative">
                    <Input
                      placeholder="Search the blog..."
                      className="pr-10"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  {loading ? (
                    <p className="text-sm text-gray-500">Loading categories...</p>
                  ) : error ? (
                    <p className="text-sm text-red-500">Failed to load categories</p>
                  ) : categories.length <= 1 ? (
                    <p className="text-sm text-gray-500">No categories available</p>
                  ) : (
                    <ul className="space-y-2">
                      {categories.slice(1).map((category) => {
                        const categoryCount = posts.filter(post => post.categories?.includes(category)).length;
                        return (
                          <li key={category} className="flex items-center justify-between">
                            <button
                              onClick={() => setSelectedCategory(category)}
                              className="hover:text-primary transition-colors text-left"
                            >
                              {category}
                            </button>
                            <span className="bg-neutral-100 text-neutral-600 text-xs py-1 px-2 rounded-full">
                              {categoryCount}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {loading ? (
                      // Loading state
                      <p className="text-sm text-gray-500">Loading recent posts...</p>
                    ) : error ? (
                      // Error state
                      <p className="text-sm text-red-500">Failed to load recent posts</p>
                    ) : posts.length === 0 ? (
                      // No posts
                      <p className="text-sm text-gray-500">No posts available</p>
                    ) : (
                      // Display recent posts
                      posts.slice(0, 3).map((post) => (
                        <div key={post._id} className="flex gap-3">
                          {post.mainImage && (
                            <a href={`/blog/${post.slug.current}`} className="w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                              <img
                                src={`https://cdn.sanity.io/images/6ff7gi0z/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')}`}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </a>
                          )}
                          <div>
                            <h4 className="font-medium hover:text-primary transition-colors">
                              <a href={`/blog/${post.slug.current}`}>{post.title}</a>
                            </h4>
                            {post.publishedAt && (
                              <p className="text-sm text-neutral-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>



              {/* Social Media Links */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    <a href="https://www.facebook.com/osteostrongtunbridgewells" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 transition">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/osteostrongtunbridgewells/" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 transition">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/osteostrong/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 transition">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/@osteostrong/videos" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 transition">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.tiktok.com/@osteostrongtw" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 transition">
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;