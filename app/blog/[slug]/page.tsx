import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin, Copy, ChevronLeft, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"



// This would typically come from a CMS or database
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
    readTime: "8 min read",
    author: {
      name: "Dennis Xhafaj",
      avatar: "/profile-image.png",
      title: "Full-Stack Developer",
    },
    content: `
      <p>Creating high-quality images for blog posts has always been a challenge for content creators. Stock photos can feel generic, custom photography is expensive, and traditional AI image generators often struggle with text rendering. But there's good news: Ideogram AI is changing the game.</p>

      <h2>The Problem with Traditional AI Image Generators</h2>
      
      <p>If you've used DALL-E2 or early versions of Midjourney, you've probably noticed their biggest limitation: they struggle with text. When you ask these models to generate an image with specific text, the results are often disappointing:</p>
      
      <ul>
        <li>Text appears garbled or unreadable</li>
        <li>Words are incomplete or misspelled</li>
        <li>Characters might be in an unrecognizable font</li>
        <li>Text positioning is unpredictable</li>
      </ul>
      
      <p>This limitation has forced many creators to generate base images with AI and then manually add text using design tools like Photoshop or Canva, adding extra steps to the content creation process.</p>

      <h2>Enter Ideogram AI</h2>
      
      <p>Ideogram AI is specifically designed to excel at text rendering in generated images. After extensive testing, I've found it produces remarkably accurate text in images, making it perfect for:</p>
      
      <ul>
        <li>Blog headers and featured images</li>
        <li>Social media graphics with captions</li>
        <li>Infographics with labeled elements</li>
        <li>Tutorial screenshots with annotations</li>
        <li>Quote images with attributed text</li>
      </ul>

      <h2>How to Use Ideogram AI Effectively</h2>
      
      <p>Here's my step-by-step process for creating perfect blog images with Ideogram:</p>
      
      <h3>1. Craft a Detailed Prompt</h3>
      
      <p>The key to great results is a specific prompt. I use this formula:</p>
      
      <pre><code>
      [Image style] + [Subject] + [Setting/Background] + [Text to include] + [Additional details]
      </code></pre>
      
      <p>For example:</p>
      
      <pre><code>
      "A minimalist flat illustration of a developer at a computer, with a futuristic UI, dark background with blue accents. Include the text 'MASTERING NEXT.JS' in a modern sans-serif font at the top of the image."
      </code></pre>

      <h3>2. Specify Text Parameters</h3>
      
      <p>For best text results, I explicitly mention:</p>
      
      <ul>
        <li>Font style (serif, sans-serif, handwritten, etc.)</li>
        <li>Text positioning (top, center, bottom)</li>
        <li>Text color (for contrast against the background)</li>
        <li>Size emphasis (large, prominent, subtle)</li>
      </ul>

      <h3>3. Generate Multiple Variations</h3>
      
      <p>I always generate 3-4 variations of each prompt. Ideogram offers slight variations in each generation, giving you options to choose from. This increases the chances of getting at least one perfect image.</p>

      <h3>4. Fine-tune with Iterations</h3>
      
      <p>If the initial results are close but not perfect, I refine my prompt based on what I see. For example, if the text is correct but too small, I'll add "with large, prominent text" to my next prompt.</p>

      <h2>Real Results: Before and After</h2>
      
      <p>The difference between traditional AI generators and Ideogram is striking. In my tests, DALL-E2 produced images with approximately 30% text accuracy, while Ideogram consistently achieved over 95% accuracy.</p>

      <h2>Cost Comparison</h2>
      
      <p>Here's why this approach is cost-effective:</p>
      
      <ul>
        <li>Ideogram offers free credits for new users</li>
        <li>Paid plans start at just $8/month for 200 generations</li>
        <li>Compared to stock photo subscriptions ($29-$99/month) or custom design ($50-$200 per image), the savings are substantial</li>
        <li>The time saved from not having to edit text into images manually is invaluable</li>
      </ul>

      <h2>Limitations to Be Aware Of</h2>
      
      <p>While Ideogram excels at text, it's worth noting a few limitations:</p>
      
      <ul>
        <li>Very long text passages may still have errors</li>
        <li>Extremely specific font requests can be hit or miss</li>
        <li>Complex layouts with multiple text elements require careful prompting</li>
      </ul>

      <h2>Conclusion</h2>
      
      <p>Ideogram AI has transformed my content creation workflow. I can now generate professional-quality blog images with perfect text in minutes, without needing additional design tools or skills.</p>
      
      <p>For bloggers, content creators, and marketers looking to streamline their visual content creation, I highly recommend giving Ideogram a try. The time and cost savings, combined with the quality of output, make it an essential tool in my content creation arsenal.</p>
      
      <p>Have you tried Ideogram or other AI image generators for your content? I'd love to hear about your experiences in the comments below!</p>
    `,
    relatedPosts: [2, 3, 5], // IDs of related posts
  },
  {
    id: 2,
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt:
      "Explore the upcoming trends and technologies that will shape the web development landscape in the coming year.",
    date: "April 15, 2024",
    category: "Web Development",
    categoryColor: "blue",
    image: "/placeholder.svg?height=400&width=800",
    slug: "future-web-development",
    readTime: "10 min read",
    author: {
      name: "Dennis Xhafaj",
      avatar: "profile-image.png",
      title: "Full-Stack Developer",
    },
    content: "<p>Content coming soon...</p>",
    relatedPosts: [1, 3, 4],
  },
  {
    id: 3,
    title: "Building Accessible Websites: A Comprehensive Guide",
    excerpt: "Learn how to create websites that are accessible to everyone, including people with disabilities.",
    date: "April 3, 2024",
    category: "Accessibility",
    categoryColor: "purple",
    image: "/placeholder.svg?height=400&width=800",
    slug: "accessible-websites",
    readTime: "12 min read",
    author: {
      name: "Dennis Xhafaj",
      avatar: "profile-image.png",
      title: "Full-Stack Developer",
    },
    content: "<p>Content coming soon...</p>",
    relatedPosts: [1, 2, 5],
  },
  {
    id: 4,
    title: "Optimizing React Applications for Performance",
    excerpt: "Practical tips and techniques to make your React applications faster and more efficient.",
    date: "March 22, 2024",
    category: "React",
    categoryColor: "blue",
    image: "/placeholder.svg?height=400&width=800",
    slug: "react-performance",
    readTime: "9 min read",
    author: {
      name: "Dennis Xhafaj",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hChiXO9hl9L1cf5cVH2AlAa110xULj.png",
      title: "Full-Stack Developer",
    },
    content: "<p>Content coming soon...</p>",
    relatedPosts: [2, 3, 5],
  },
  {
    id: 5,
    title: "The Power of Server Components in Next.js",
    excerpt: "Discover how Server Components can revolutionize the way you build web applications with Next.js.",
    date: "March 10, 2024",
    category: "Next.js",
    categoryColor: "orange",
    image: "/placeholder.svg?height=400&width=800",
    slug: "server-components",
    readTime: "7 min read",
    author: {
      name: "Dennis Xhafaj",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hChiXO9hl9L1cf5cVH2AlAa110xULj.png",
      title: "Full-Stack Developer",
    },
    content: "<p>Content coming soon...</p>",
    relatedPosts: [1, 2, 4],
  },
]


export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = blogPosts.find((post) => post.slug === slug);
  
  if (!post) {
    notFound()
  }

  // Find related posts
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((id) => blogPosts.find((post) => post.id === id)).filter(Boolean)
    : []

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to blog */}
        <div className="mb-8">
          <Link href="/blog" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <span className={`tag tag-${post.categoryColor} mr-4`}>#{post.category}</span>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

          {/* Author info */}
          <div className="flex items-center">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-gray-400 text-sm">{post.author.title}</p>
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="mb-10 rounded-xl overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>

        {/* Article content */}
        <article className="prose prose-invert prose-lg max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Social sharing */}
        <div className="border-t border-b border-white/10 py-6 mb-16">
          <div className="flex items-center justify-between">
            <p className="font-medium">Share this article</p>
            <div className="flex space-x-4">
              <button className="social-icon" aria-label="Share on Facebook">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="social-icon" aria-label="Share on Twitter">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="social-icon" aria-label="Share on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="social-icon" aria-label="Copy link">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(
                (relatedPost) =>
                  relatedPost && (
                    <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group">
                      <div className="rounded-xl overflow-hidden mb-4">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={400}
                          height={225}
                          className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className={`tag tag-${relatedPost.categoryColor} mb-2`}>{relatedPost.category}</span>
                      <h3 className="font-bold group-hover:text-gray-300 transition-colors">{relatedPost.title}</h3>
                    </Link>
                  ),
              )}
            </div>
          </div>
        )}

        {/* Previous/Next navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prevPost && (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 flex items-start group"
            >
              <ChevronLeft className="w-5 h-5 mr-4 mt-1 flex-shrink-0" />
              <div>
                <span className="text-gray-400 text-sm">Previous Article</span>
                <h4 className="font-bold group-hover:text-gray-300 transition-colors">{prevPost.title}</h4>
              </div>
            </Link>
          )}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 flex items-start text-right group"
            >
              <div className="ml-auto mr-4">
                <span className="text-gray-400 text-sm">Next Article</span>
                <h4 className="font-bold group-hover:text-gray-300 transition-colors">{nextPost.title}</h4>
              </div>
              <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
