'use client';
import { useEffect, useState } from 'react'
import { Facebook, Twitter, Linkedin, Send } from "lucide-react";
import Link from 'next/link';
import BlogCard from './BlogCard';
import axios from 'axios';
import { BlogType } from '@/types/types';
import { useParams } from 'next/navigation';


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
    const {slug} = useParams();
    const [blog, setBlog] = useState<BlogType | null>(null)
    const getBlogs = async()=> {
    const response = await axios.get(`/api/blogs/${slug}`);
    if(response.status === 200){
      setBlog(response.data.blog);
    }
    console.log(response.data);
  }

  useEffect(()=>{
    getBlogs();
  },[]);
  return (
     <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center leading-tight mb-6">
          {blog?.title}
        </h1>

        {/* Intro text */}
        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          {blog?.description}
        </p>

        {/* Featured Image */}
        <div className="w-full aspect-video bg-muted rounded-2xl mb-10 overflow-hidden">
          <img src={blog?.image} alt={blog?.title} />
        </div>

        {/* Body Content */}
        <div className="space-y-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
          {blog?.content}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border my-10" />

      </article>
    </div>
  )
}

export default BlogPost
