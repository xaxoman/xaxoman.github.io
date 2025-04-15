import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Here is how i'm using AI to generate my blog images for free",
      excerpt:
        "Discover how the new Ideogram AI model can create images with perfect text which has always been a problem for models like DALL-E2 and MidJourney.",
      date: "April 24, 2024",
      category: "Generative AI",
      categoryColor: "green",
      image: "/blog_img/2024_cover1.webp",
      slug: "ai-blog-images",
    },
    {
      id: 2,
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "Explore the upcoming trends and technologies that will shape the web development landscape in the coming year.",
      date: "April 15, 2024",
      category: "Web Development",
      categoryColor: "blue",
      image: "/blog_img/2024_cover2.webp",
      slug: "future-web-development",
    }
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="section-heading">Blog</h1>

        <div className="grid gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="grid md:grid-cols-2 gap-8 border-b border-white/10 pb-12">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl group">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <div className="flex flex-col">
                <div className="mb-auto">
                  <div className="mb-4">
                    <time className="text-gray-400">{post.date}</time>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-gray-200 transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-400 mb-6">{post.excerpt}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`tag tag-${post.categoryColor}`}>#{post.category}</span>

                  <Link href={`/blog/${post.slug}`} className="flex items-center text-white font-medium">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
