import BlogHero from '@/components/blogs/bloghero/BlogHero'
import BlogSection from '@/components/blogs/BlogSection/BlogSection'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='mt-25'>
        <BlogHero/>
        <BlogSection/>
    </div>
  )
}

export default BlogPage