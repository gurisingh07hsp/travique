import React from 'react'
interface BlogCardProps {
  image?: string;
  badge: string;
  title: string;
  description: string;
}
const BlogCard = ({ image, badge, title, description }: BlogCardProps) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden bg-muted aspect-4/3 mb-4">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
        <div className="absolute top-4 right-4 bg-main text-primary rounded-full px-4 py-1 text-xs font-medium">
          {badge}
        </div>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 leading-tight truncate">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  )
}

export default BlogCard
