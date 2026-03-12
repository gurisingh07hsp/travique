import React from 'react'
import BlogCard from './BlogCard';
const blogPosts = [
  {
    badge: "Destinations",
    title: "Hidden Gems of Southeast...",
    description: "Fermentum luctus convallis non lectus. Aliqua at ut viverra noniqu. Fermentum luctus convali non lectus convallis.",
  },
  {
    badge: "Guide",
    title: "Inside Travique's Tour Pack...",
    description: "Fermentum luctus convallis non lectus. Aliqua at ut viverra noniqu. Fermentum luctus convali non lectus convallis.",
  },
  {
    badge: "Travel Tips",
    title: "Plan a Hassle-Free Vacation",
    description: "Fermentum luctus convallis non lectus. Aliqua at ut viverra noniqu. Fermentum luctus convali non lectus convallis.",
  },
  {
    badge: "Experience",
    title: "Explore Cities with Us",
    description: "Fermentum luctus convallis non lectus. Aliqua at ut viverra noniqu. Fermentum luctus convali non lectus convallis.",
  },
  {
    badge: "Wellness Travel",
    title: "Smart & Safe Travel Tips",
    description: "Fermentum luctus convallis non lectus. Aliqua at ut viverra noniqu. Fermentum luctus convali non lectus convallis.",
  },
  {
    badge: "Destinations",
    title: "Your Trusted Travel Partner",
    description: "Fermentum luctus convallis non lectus. Aliqua at ut viverra noniqu. Fermentum luctus convali non lectus convallis.",
  },
];
const BlogPage = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-20 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="txt-main font-semibold text-sm tracking-widest uppercase mb-3">
            Blog and Articles
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Latest Travel Articles
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            Fermentum luctus convallis non lectus. Aliquam at ut viverra noniqu arcu massa laoreet
            commodo ac. Fermentum luctus convallis. Aliquam at ut
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPage
