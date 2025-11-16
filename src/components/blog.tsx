import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { blogs } from '@/data/blog';

export default function Blog() {
  const featuredPosts = blogs.slice(0, 3);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            From the <span className="text-purple-600">Blog</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Blog Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link href={`/blogs/${post.slug}`} className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <Link href={"/blogs"} className="flex justify-center">
          <Button variant="roundedGreen" size="roundedGreen">
            View All
            <ArrowRight className="ml-3 size-5" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
