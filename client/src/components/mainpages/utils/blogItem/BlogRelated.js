import React from 'react'
import { Link } from 'react-router-dom'

function BlogRelated({ blog }) {
  return (
    <div className="blog_related">
      <div className="blog_related_item">
        <Link to={`/blog_details/${blog._id}`}>
          <img src={blog.images.url} alt="" />
          <h4 title={blog.title}>{blog.title}</h4>
        </Link>
      </div>
    </div>
  )
}
export default BlogRelated