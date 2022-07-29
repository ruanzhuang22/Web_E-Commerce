const Blogs = require('../models/blogModel')

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 3
        const skip = (page -1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const blogsCtrl = {
    getBlogs: async (req, res) => {
        try {
            const features = new APIfeatures(Blogs.find(), req.query)
            .paginating()
            const blogs = await features.query
            res.json({
                status: 'success',
                result: blogs.length,
                blogs: blogs
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createBlogs: async (req, res) => {
        try {
            const {blog_id, title, description, images} = req.body
            if(!images) return res.status(400).json({msg: "No image upload"})

            const blog = await Blogs.findOne({blog_id})
            if(blog)
                return res.status(400).json({msg: "This blog already exists."})

            const newBlog = new Blogs({
                blog_id, title: title.toLowerCase(), description, images
            })

            await newBlog.save()
            res.json({msg: "Created a blog"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteBlogs: async (req, res) => {
        try {
            await Blogs.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Blog"})
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    updateBlogs: async (req, res) => {
        try {
            const {title, description, images} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Blogs.findOneAndUpdate({_id: req.params.id}, {
                title: title.toLowerCase(), description, images
            })

            res.json({msg: "Updated a Blog"})
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

module.exports = blogsCtrl