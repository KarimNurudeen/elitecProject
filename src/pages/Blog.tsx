import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, User, MessageCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/services/blogService";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // Fetch blog posts from API
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blogPosts', currentPage, searchQuery, selectedCategory],
    queryFn: () => blogService.getBlogPosts({
      page: currentPage,
      search: searchQuery,
      category_id: selectedCategory,
      // is_published: true, // Commented out to show all posts during development
      ordering: '-published_date',
    }),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  // Fetch recent posts for sidebar
  const { data: recentPostsData } = useQuery({
    queryKey: ['recentBlogPosts'],
    queryFn: () => blogService.getBlogPosts({
      page: 1,
      // is_published: true, // Commented out to show all posts during development
      ordering: '-published_date',
    }),
    staleTime: 5 * 60 * 1000,
  });

  // Fetch categories for filter
  const { data: categoriesData } = useQuery({
    queryKey: ['blogCategories'],
    queryFn: blogService.getCategories,
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleCategoryFilter = (categoryId: string | undefined) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page on category change
  };

  const blogPosts = data?.results || [];
  const recentPosts = recentPostsData?.results?.slice(0, 2) || [];
  const categories = categoriesData || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Blog</h1>
          <div className="text-center text-white/80">
            <span>Home</span> <span className="mx-2">{">>"}</span> <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Blog Posts */}
            <div className="lg:col-span-2 space-y-8">
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-12 w-12 animate-spin text-accent" />
                </div>
              ) : isError ? (
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      Error Loading Blog Posts
                    </h3>
                    <p className="text-red-600">
                      {error instanceof Error ? error.message : 'Failed to load blog posts. Please try again later.'}
                    </p>
                  </CardContent>
                </Card>
              ) : blogPosts.length === 0 ? (
                <Card className="border-accent/20">
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground text-lg">
                      No blog posts found. {searchQuery && 'Try a different search term.'}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                blogPosts.map((post) => (
                  <Card key={post.id} className="border-accent/20 overflow-hidden">
                    <CardContent className="p-0">
                      {post.featured_image && (
                        <div className="relative">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{format(new Date(post.published_date), 'MMMM dd, yyyy')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author?.username || 'Unknown Author'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4" />
                            <span>0 Comments</span>
                          </div>
                        </div>

                        {/* Category Badge */}
                        {post.category && (
                          <div className="mb-4">
                            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                              {post.category.name}
                            </span>
                          </div>
                        )}

                        <h2 className="text-2xl font-bold text-navy mb-4">
                          <Link to={`/blog/${post.id}`} className="hover:text-accent transition-colors">
                            {post.title}
                          </Link>
                        </h2>

                        <div
                          className="text-muted-foreground mb-6 leading-relaxed line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
                          }}
                        />

                        <Link to={`/blog/${post.id}`}>
                          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}

              {/* Pagination */}
              {data && (data.next || data.previous) && (
                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => p - 1)}
                    disabled={!data.previous}
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={!data.next}
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>

            {/* Right - Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <form onSubmit={handleSearch} className="relative">
                    <Input
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-12 border-accent/20"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      variant="ghost"
                      className="absolute right-0 top-0 h-full rounded-l-none text-accent hover:text-white hover:bg-accent"
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent"></span>
                    Categories
                  </h3>

                  <div className="relative group">
                    <button
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg transition-colors border-2",
                        !selectedCategory
                          ? "bg-accent text-white border-accent"
                          : "bg-white text-navy border-accent/20 hover:border-accent"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">
                          {selectedCategory
                            ? categories.find(c => c.id.toString() === selectedCategory)?.name
                            : "All Categories"}
                        </span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-accent/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <div className="py-2">
                        <button
                          onClick={() => handleCategoryFilter(undefined)}
                          className={cn(
                            "w-full text-left px-4 py-2 transition-colors",
                            !selectedCategory
                              ? "bg-accent/10 text-accent font-medium"
                              : "hover:bg-accent/5 text-muted-foreground"
                          )}
                        >
                          All Categories
                        </button>
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => handleCategoryFilter(category.id.toString())}
                            className={cn(
                              "w-full text-left px-4 py-2 transition-colors",
                              selectedCategory === category.id.toString()
                                ? "bg-accent/10 text-accent font-medium"
                                : "hover:bg-accent/5 text-muted-foreground"
                            )}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent"></span>
                    Recent Post
                  </h3>

                  <div className="space-y-6">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="flex gap-4 group"
                      >
                        {post.featured_image && (
                          <div className="flex-shrink-0">
                            <img
                              src={post.featured_image}
                              alt={post.title}
                              className="w-20 h-20 rounded-full object-cover group-hover:opacity-80 transition-opacity"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-navy mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {format(new Date(post.published_date), 'MMMM dd, yyyy').toUpperCase()}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

