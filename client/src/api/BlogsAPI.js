import { useState, useEffect } from 'react'
import axios from 'axios'

function BlogsAPI() {
  const [blogs, setBlogs] = useState([])
  const [callback, setCallback] = useState(false)
  const [page, setPage] = useState(1)
  const [result, setResult] = useState(0)

  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios.get(`/api/blog?limit=${page * 6}`)
      setBlogs(res.data.blogs)
      setResult(res.data.result)
    }
    getBlogs()
  }, [callback, page])

  return {
    blogs: [blogs, setBlogs],
    callback: [callback, setCallback],
    page: [page, setPage],
    result: [result, setResult]
  }
}

export default BlogsAPI