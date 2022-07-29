import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

function BtnRenderBlog({ blog, deleteBlogs }) {
  const state = useContext(GlobalState)
  const [isAdmin] = state.userAPI.isAdmin

  return (
    <div className="row_btn">
      {
        isAdmin ?
          <>
            <Link id="btn_buy" to="#!" onClick={() => deleteBlogs(blog._id, blog.images.public_id)}>
              <i class="fa-solid fa-trash"></i>
            </Link>
            <Link id="btn_view" to={`/edit_blog/${blog._id}`}>
              <i class="fa-solid fa-pen"></i>
            </Link>
          </>
          : <>
            <Link id="btn_view" class="view_blog" to={`blog_details/${blog._id}`}>
              Chi tiết
            </Link>
          </>
      }
    </div>
  )
}

export default BtnRenderBlog