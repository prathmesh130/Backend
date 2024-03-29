const BLOG = require('../models/blog.model.js');
const COMMENT = require('../models/comment.model.js');
// Create Blog
const createBlog = async (req, res) => {
    const { title, description } = req.body
    const blog = await BLOG.create({
        title,
        author: req.user.id,
        description,
        blogImg: `/uploads/${req.file.filename}`
    })
    res.redirect('/')
}
// Delete Blog 
const deleteBlog = async (req, res) => {
    const blog = await BLOG.findById(req.params.id)
    await blog.deleteOne();
    res.redirect('/profile')
}
// Create Comment
const createComment = async (req, res) => {
    const comment = await COMMENT.create({
        content: req.body.content,
        blogId: req.params.blogid,
        createdby: req.user.id
    })
    res.redirect(`/blog/${req.params.blogid}`)
}

// export blog controller
module.exports = { createBlog, deleteBlog, createComment }
