import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import OwlCarousel from 'react-owl-carousel';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BlogRelated from '../utils/blogItem/BlogRelated'

function DetailBlog() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [blogs] = state.blogsAPI.blogs
    const [detailBlog, setDetailBlog] = useState([])

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
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        },
    };

    useEffect(() => {
        if (params) {
            blogs.forEach(blog => {
                if (blog._id === params.id) setDetailBlog(blog)
            })
        }
    }, [params, blogs])

    if (detailBlog.length === 0) return null

    return (
        <>
            <div className="container">
                <div className="detail_blog">
                    <div className="box_detail">
                        <h2>{detailBlog.title}</h2>
                        <img src={detailBlog.images.url} alt="" />
                        <p>{detailBlog.description}</p>
                    </div>
                    <div className="blog_list">
                        <h3>Blog khác</h3>
                        <OwlCarousel className='owl-theme' {...options} >
                            {
                                blogs.map(blog => {
                                    return <BlogRelated key={blog._id} blog={blog} />
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailBlog