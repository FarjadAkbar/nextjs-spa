// src/app/blogs/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { blogs } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const  {slug} = await params;

  const blog = blogs.find(blog => blog.slug === slug);
  if (!blog) {
    notFound();
  }

  // Find related posts (excluding current post)
  const relatedPosts = blogs
    .filter(b => b.id !== blog.id && b.tags.some(tag => blog.tags.includes(tag)))
    .slice(0, 2);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <div className="flex items-center text-gray-600 text-sm">
          <span>By {blog.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
      </div>

      <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose max-w-none text-gray-700">
        {blog.content.split('\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">{paragraph.replace('## ', '')}</h2>;
          }
          if (paragraph.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800">{paragraph.replace('### ', '')}</h3>;
          }
          if (paragraph.startsWith('- ')) {
            return (
              <ul key={index} className="list-disc pl-6 my-4 space-y-2">
                {paragraph.split('\n').map((item, i) => (
                  <li key={i} className="text-gray-700">{item.replace('- ', '')}</li>
                ))}
              </ul>
            );
          }
          if (paragraph.startsWith('1. ')) {
            return (
              <ol key={index} className="list-decimal pl-6 my-4 space-y-2">
                {paragraph.split('\n').map((item, i) => (
                  <li key={i} className="text-gray-700">{item.replace(/^\d+\.\s*/, '')}</li>
                ))}
              </ol>
            );
          }
          if (paragraph.trim() === '') {
            return <br key={index} />;
          }
          return <p key={index} className="my-4 leading-relaxed">{paragraph}</p>;
        })}
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group block"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-20 w-20 relative rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-emerald-600">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}