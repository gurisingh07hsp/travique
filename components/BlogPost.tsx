import React from 'react'
import { Facebook, Twitter, Linkedin, Send } from "lucide-react";
import Link from 'next/link';
import BlogCard from './BlogCard';


const relatedPosts = [
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
];

const checklistItems = [
  "Facilisis tincidunt porta ut nulla ac.",
  "Facilisis tincidunt porta ut nulla ac.",
  "Facilisis tincidunt porta ut nulla ac.",
  "Facilisis tincidunt porta ut nulla ac.",
  "Facilisis tincidunt porta ut nulla ac.",
  "Facilisis tincidunt porta ut nulla ac.",
];

const tags = ["Efficiency", "Convenience", "Experience"];
const BlogPost = () => {
  return (
     <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center leading-tight mb-6">
          The Hidden Gems of Southeast Asia You Must Visit
        </h1>

        {/* Intro text */}
        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor, tincidunt
          leo vel, euismod neque. Maecenas facilisis lacus. Mauris malesuada eros
          ex, vitae suscipit metus pellentesque non. Aenean tincidunt posuere.
        </p>

        {/* Featured Image */}
        <div className="w-full aspect-video bg-muted rounded-2xl mb-10 overflow-hidden">
          <div className="w-full h-full bg-muted-foreground/20" />
        </div>

        {/* Body Content */}
        <div className="space-y-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque. Maecenas
            facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aliquam varius turpis
            porttitor, tincidunt leo vel, euismod neque. Maecenas facilisis lacus
          </p>

          {/* Subheading 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Redefining Convenience
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque.
              Maecenas facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aenean
              tincidunt posuere quam non vestibulum. Suspendisse nec diam mi.
            </p>
          </div>

          {/* Subheading 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Safety Beyond the Road
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque.
              Maecenas facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aenean
              tincidunt posuere quam non vestibulum. Suspendisse nec diam mi.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Facilisis tincidunt porta ut nulla ac eu etiam. Tempor augue sit facilisi arcu leo a mattis. Vestibulum libero id convallis at. Cursus
              ultrices volutpat sed dolor. Pretium sit consequat lacus etiam malesuada laoreet purus massa neque. Arcu tempus mi.
            </p>
          </div>

          {/* Subheading 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Beyond Transportation—Corporate Excellence
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Facilisis tincidunt porta ut nulla ac eu etiam. Tempor augue sit facilisi arcu leo a mattis. Vestibulum libero id convallis at. Cursus
              ultrices volutpat sed dolor. Pretium sit consequat lacus etiam malesuada laoreet purus massa neque. Arcu tempus mi.
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing paragraph */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque.
            Maecenas facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non. Aenean
            tincidunt posuere quam non vestibulum. Suspendisse nec diam mi. Nulla vitae convallis leo. Morbi ut turpis dui. Aenean urna
            justo, posuere in pellentesque et, porta vitae neque. Curabitur euismod ultrices ligula a viverra.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border my-10" />

        {/* Tags & Share */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Tags:</span>
            {tags.map((tag) => (
              <Link
                key={tag}
                href="#"
                className="text-sm txt-main hover:underline"
              >
                {tag}{tag !== tags[tags.length - 1] ? "," : ""}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground">Share :</span>
            {[Facebook, Twitter, Linkedin, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-main text-primary flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </article>

      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Related Article
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogPost
