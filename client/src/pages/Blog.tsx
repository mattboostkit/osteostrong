import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Schema for email subscription form
const subscribeSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type SubscribeValues = z.infer<typeof subscribeSchema>;

// Sample blog post data structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

// Sample blog posts (will be replaced with actual data from API/database)
const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Science Behind Osteogenic Loading",
    excerpt: "Discover how osteogenic loading works to strengthen your bones and improve overall skeletal health.",
    image: "/images/blog/bone-health.jpg",
    date: "15 April 2025",
    author: "Dr. Sarah Johnson",
    category: "Science",
    slug: "science-behind-osteogenic-loading"
  },
  {
    id: "2",
    title: "5 Ways OsteoStrong Improves Athletic Performance",
    excerpt: "Learn how OsteoStrong sessions can enhance your athletic abilities and help prevent sports injuries.",
    image: "/images/blog/athletic-performance.jpg",
    date: "10 April 2025",
    author: "Mark Williams",
    category: "Performance",
    slug: "improve-athletic-performance"
  },
  {
    id: "3",
    title: "Osteoporosis Prevention: Start Early",
    excerpt: "Why it's never too early to start thinking about bone health and how OsteoStrong can help.",
    image: "/images/blog/prevention.jpg",
    date: "5 April 2025",
    author: "Emma Thompson",
    category: "Prevention",
    slug: "osteoporosis-prevention"
  },
];

// Blog categories for filtering
const categories = [
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
  
  const form = useForm<SubscribeValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    }
  });
  
  const onSubscribe = async (data: SubscribeValues) => {
    try {
      const response = await apiRequest("POST", "/api/newsletter", data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Subscription successful",
          description: "Thank you for subscribing to our newsletter!",
        });
        form.reset();
      } else {
        toast({
          title: "Subscription failed",
          description: result.message || "There was a problem with your subscription",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was a problem with your subscription. Please try again later.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <>
      <Helmet>
        <title>OsteoStrong Blog | Bone Health & Wellness Articles</title>
        <meta name="description" content="Read the latest articles on bone health, osteoporosis prevention, and wellness tips from OsteoStrong experts." />
        <meta name="keywords" content="OsteoStrong blog, bone health articles, osteoporosis prevention, wellness tips, skeletal strength" />
        <meta property="og:title" content="OsteoStrong Blog | Bone Health & Wellness Articles" />
        <meta property="og:description" content="Read the latest articles on bone health, osteoporosis prevention, and wellness tips from OsteoStrong experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/blog" />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/blog-header.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OsteoStrong Blog | Bone Health & Wellness Articles" />
        <meta name="twitter:description" content="Read the latest articles on bone health, osteoporosis prevention, and wellness tips from OsteoStrong experts." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/blog-header.jpg" />
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/blog" />
      </Helmet>
      
      {/* Blog Header */}
      <div className="py-10 bg-primary">
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
                    variant={category === "All" ? "default" : "outline"}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Blog Posts */}
              <div className="grid gap-8">
                {sampleBlogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto bg-neutral-200">
                        {/* Image placeholder - will be replaced with actual images */}
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                          Blog Image Placeholder
                        </div>
                      </div>
                      <CardContent className="md:w-2/3 p-6">
                        <div className="flex items-center text-sm text-neutral-500 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.category}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                          <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h2>
                        <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-neutral-300 mr-2"></div>
                            <span className="text-sm font-medium">{post.author}</span>
                          </div>
                          <Button variant="link" className="text-primary">
                            <a href={`/blog/${post.slug}`}>Read More</a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <i className="fas fa-chevron-left"></i>
                  </Button>
                  <Button variant="default" size="sm" className="rounded-md">1</Button>
                  <Button variant="outline" size="sm" className="rounded-md">2</Button>
                  <Button variant="outline" size="sm" className="rounded-md">3</Button>
                  <Button variant="outline" size="icon">
                    <i className="fas fa-chevron-right"></i>
                  </Button>
                </div>
              </div>
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
                  <ul className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <li key={category} className="flex items-center justify-between">
                        <a href={`/blog/category/${category.toLowerCase()}`} className="hover:text-primary transition-colors">
                          {category}
                        </a>
                        <span className="bg-neutral-100 text-neutral-600 text-xs py-1 px-2 rounded-full">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Recent Posts */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {sampleBlogPosts.map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="w-20 h-20 bg-neutral-200 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium hover:text-primary transition-colors">
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                          </h4>
                          <p className="text-sm text-neutral-500">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-neutral-600 mb-4">
                    Get the latest articles, resources, and bone health tips delivered to your inbox.
                  </p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubscribe)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black font-medium">Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-yellow-400 text-white"
                      >
                        Subscribe
                      </Button>
                    </form>
                  </Form>
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