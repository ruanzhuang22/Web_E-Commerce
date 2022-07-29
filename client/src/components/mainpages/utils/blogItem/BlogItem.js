import React from 'react'
import BtnRenderBlog from './BtnRenderBlog'

function BlogItem({ blog, isAdmin, deleteBlogs, handleCheck }) {

  return (
    <>
      {isAdmin ?
        <tr>
          <td><input type="checkbox" checked={blog.checked}
            onChange={() => handleCheck(blog._id)} /></td>
          <td><img src={blog.images.url} alt="" /></td>
          <td><h2 title={blog.title}>{blog.title}</h2></td>
          <td><p>{blog.description}</p></td>
          <td><BtnRenderBlog blog={blog} deleteBlogs={deleteBlogs} /></td>
        </tr>
        : <div className="blog_card">
          {
            isAdmin && <input type="checkbox" checked={blog.checked}
              onChange={() => handleCheck(blog._id)} />
          }
          <img src={blog.images.url} alt="" />

          <div className="blog_box">
            <h2 title={blog.title}>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
          <BtnRenderBlog blog={blog} deleteBlogs={deleteBlogs} />
        </div>
      }
    </>

  )
}

export default BlogItem