import React from 'react';
import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Benefits of In-Home Physical Therapy',
    excerpt: 'Discover how receiving physical therapy in the comfort of your own home can accelerate recovery and improve outcomes.',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    category: 'Patient Care',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
  },
  {
    id: '2',
    title: 'Understanding the Direct-Pay Model',
    excerpt: 'Learn how our transparent pricing model eliminates insurance hassles and puts you in control of your healthcare.',
    date: 'Feb 5, 2026',
    readTime: '4 min read',
    category: 'Our Model',
    imageUrl: 'https://images.unsplash.com/photo-1554224311-beee460c201f?w=800',
  },
  {
    id: '3',
    title: 'Common Conditions We Treat',
    excerpt: 'From post-surgical rehabilitation to chronic pain management, explore the wide range of conditions our experts address.',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    category: 'Conditions',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800',
  },
];

export const Blog = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-neutral-900">
            ReThrive Blog
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Insights, tips, and stories about physical therapy, wellness, and living your best life.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-neutral-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#0BA4AE] text-white text-xs font-bold uppercase tracking-wider rounded-md">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#0BA4AE] transition-colors">
                  {post.title}
                </h2>

                <p className="text-neutral-500 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[#0BA4AE] font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="max-w-2xl mx-auto text-center py-12 px-6 bg-neutral-50 rounded-2xl border border-neutral-200">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            More Content Coming Soon
          </h3>
          <p className="text-neutral-500 leading-relaxed mb-6">
            We're working on bringing you valuable insights and stories. Check back soon for more articles!
          </p>
          <Link 
            to="/"
            className="inline-block bg-[#0BA4AE] text-white px-8 py-3 font-bold rounded-md hover:bg-[#088f98] transition-colors text-sm uppercase tracking-wider"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};
