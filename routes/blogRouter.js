const router = require('express').Router()
const blogsCtrl = require('../controllers/blogCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/blog')
    .get(blogsCtrl.getBlogs)
    .post(auth, authAdmin, blogsCtrl.createBlogs)
router.route('/blog/:id')
    .delete(auth, authAdmin, blogsCtrl.deleteBlogs)
    .put(auth, authAdmin, blogsCtrl.updateBlogs)

module.exports = router