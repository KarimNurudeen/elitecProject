import { User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogPosts = [
  {
    id: 1,
    image: blog1,
    author: "Admin",
    date: "Jul 21, 2020",
    title: "How To Clean Your Home Faster And More Efficiently",
    excerpt: "We provide janitorial and specialized cleaning services for all types and sizes of complexes from small to large offices."
  },
  {
    id: 2,
    image: blog2,
    author: "Admin",
    date: "Jul 21, 2020",
    title: "Five Winter Deep Cleaning Tips From The Pros",
    excerpt: "We provide janitorial and specialized cleaning services for all types and sizes of complexes from small to large offices."
  },
  {
    id: 3,
    image: blog3,
    author: "Admin",
    date: "Jul 21, 2020",
    title: "How About Fall Cleaning? 8 Tips To Get Ready For The Winter",
    excerpt: "We provide janitorial and specialized cleaning services for all types and sizes of complexes from small to large offices."
  }
];

export const NewsFeedSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">Blog</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">News Feeds</h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-3 text-sm text-accent">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                <Link to="/blog">{post.title}</Link>
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
