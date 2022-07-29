import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import BlogItem from './../utils/blogItem/BlogItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import BlogLoadMore from '../Blogs/BlogLoadMore'
import { Link } from 'react-router-dom'

function BlogManager(props) {
    const state = useContext(GlobalState)
    const [blogs, setBlogs] = state.blogsAPI.blogs
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.blogsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const { setKey } = props

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
                <div className="row my-4">
                    <div className="add-new col-lg-6">
                        <Link onClick={() => setKey(7)}>Add New</Link>
                    </div>
                    <div className="delete-all col-lg-6">
                        <span>Select all</span>
                        <input type="checkbox" checked={isCheck} onChange={checkAll} />
                        <button onClick={deleteAll}>Delete All</button>
                    </div>
                </div>
            }

            <div className="blogs blogs-admin">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map(blog => {
                                return <BlogItem key={blog._id} blog={blog}
                                    isAdmin={isAdmin} deleteBlogs={deleteBlogs} handleCheck={handleCheck} />
                            })
                        }
                    </tbody>
                </table>

            </div>

            <BlogLoadMore />
            {blogs.length === 0 && <Loading />}
        </>
    )
}

export default BlogManager