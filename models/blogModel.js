const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    blog_id: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
},{
    timestamps: true
}) 

module.exports = mongoose.model("Blogs", blogsSchema)