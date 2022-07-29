import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import BlogItem from './../utils/blogItem/BlogItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import BlogLoadMore from '../Blogs/BlogLoadMore'

function Blogs() {
  const state = useContext(GlobalState)
  const [blogs, setBlogs] = state.blogsAPI.blogs
  const [isAdmin] = state.userAPI.isAdmin
  const [token] = state.token
  const [callback, setCallback] = state.blogsAPI.callback
  const [loading, setLoading] = useState(false)
  const [isCheck, setIsCheck] = useState(false)

  const handleCheck = (id) => {
    blogs.forEach(blog => {
      if (blog._id === id) blog.checked = !blog.checked
    })
    setBlogs([...blogs])
  }

  const checkAll = () => {
    blogs.forEach(blog => {
      blog.checked = !isCheck
    })
    setBlogs([...blogs])
    setIsCheck(!isCheck)
  }

  const deleteAll = () => {
    blogs.forEach(blog => {
      if (blog.checked) deleteBlogs(blog._id, blog.images.public_id)
    })
  }

  const deleteBlogs = async (id, public_id) => {
    try {
      setLoading(true)
      const destroyImg = axios.post('/api/destroy', { public_id }, {
        headers: { Authorization: token }
      })
      const deleteBlog = axios.delete(`/api/blog/${id}`, {
        headers: { Authorization: token }
      })

      await destroyImg
      await deleteBlog
      setCallback(!callback)
      setLoading(false)
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  if (loading) return <div><Loading /></div>
  return (
    <>
      {
        isAdmin &&
        <div className="delete-all">
          <span>Select all</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Delete all</button>
        </div>
      }
      <div className="blogs d-flex">
        {
          blogs.map(blog => {
            return <BlogItem key={blog._id} blog={blog}
              isAdmin={isAdmin} deleteBlogs={deleteBlogs} handleCheck={handleCheck} />
          })
        }
      </div>

      <BlogLoadMore />
      {blogs.length === 0 && <Loading />}
    </>
  )
}

export default Blogs