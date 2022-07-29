import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useHistory, useParams } from 'react-router-dom'

const initialState = {
    blog_id: '',
    title: '',
    description: '',
    _id: ''
}

function CreateBlog(props) {
    const state = useContext(GlobalState)
    const [blog, setBlog] = useState(initialState)
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [blogs] = state.blogsAPI.blogs
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.blogsAPI.callback

    const history = useHistory()
    const param = useParams()
    const { setKey } = props

    useEffect(() => {
        if (param.id) {
            setOnEdit(true)
            blogs.forEach(blog => {
                if (blog._id === param.id) {
                    setBlog(blog)
                    setImages(blog.images)
                }
            })
        } else {
            setOnEdit(false)
            setBlog(initialState)
            setImages(false)
        }
    }, [param.id, blogs])

    const handleUpload = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]

            if (!file) return alert("File not exist")

            if (file.size > 2048 * 2048) // 1mb
                return alert("Size too large!")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png')
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: token }
            })
            setLoading(false)
            setImages(res.data);

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if (!isAdmin) return alert("You're not an admin")
            setLoading(true)
            await axios.post('/api/destroy', { public_id: images.public_id }, {
                headers: { Authorization: token }
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e => {
        const { name, value } = e.target
        setBlog({ ...blog, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            if (!images) return alert("No Image Upload")

            if (onEdit) {
                await axios.put(`/api/blog/${blog._id}`, { ...blog, images }, {
                    headers: { Authorization: token }
                })
            } else {
                await axios.post(`/api/blog`, { ...blog, images }, {
                    headers: { Authorization: token }
                })
            }
            setCallback(!callback)
            history.push("/")
            setKey(4)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpLoad = {
        display: images ? "block" : "none"
    }

    return (
        <div className="create_blog">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload} />
                {
                    loading ? <div className="blog_img"><Loading /></div>
                        : <div className="blog_img" style={styleUpLoad}>
                            <img src={images ? images.url : ''} alt="" />
                            <span onClick={handleDestroy}>X</span>
                        </div>
                }

            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="blog_id">Blog ID</label>
                    <input type="text" name="blog_id" id="blog_id" required
                        value={blog.blog_id} onChange={handleChangeInput} disabled={onEdit} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                        value={blog.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="decription" required
                        value={blog.description} rows="10" onChange={handleChangeInput} />
                </div>

                <button type="submit">{onEdit ? "Update" : "Create"}</button>
            </form>
        </div>
    )
}

export default CreateBlog