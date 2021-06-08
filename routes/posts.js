import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

// list
router.get('/', getPosts);
// create
router.post('/', createPost);
// update
router.patch('/:id', auth, updatePost);
// delete
router.delete('/:id', auth, deletePost);
// like
router.patch('/:id/likePost', auth, likePost)

export default router;