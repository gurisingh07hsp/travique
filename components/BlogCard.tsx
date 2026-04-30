'use client'
import { useRouter } from "next/navigation";
interface BlogCardProps {
  image?: string;
  category: string;
  title: string;
  description: string;
  slug: string;
}
const BlogCard = ({ image, category, title, description, slug }: BlogCardProps) => {
  const router = useRouter();
  return (
    <div onClick={()=> router.push(`/blogs/${slug}`)} className="flex flex-col cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden bg-muted aspect-4/3 mb-4">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
        <div className="absolute top-4 right-4 bg-main text-primary rounded-full px-4 py-1 text-xs font-medium">
          {category}
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
