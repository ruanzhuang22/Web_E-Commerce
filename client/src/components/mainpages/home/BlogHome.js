import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import OwlCarousel from 'react-owl-carousel';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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

    const options = {
        margin: 10,
        dots: false,
        responsiveClass: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1400: {
                items: 2,
            }
        },
    };

    if (loading) return <div><Loading /></div>
    return (
        <>
            <OwlCarousel className='owl-theme' {...options} >
                {
                    blogs.map(blog => {
                        return <BlogItem key={blog._id} blog={blog}
                            isAdmin={isAdmin} deleteBlogs={deleteBlogs} handleCheck={handleCheck} />
                    })
                }

            </OwlCarousel>
        </>
    )
}

export default Blogs