const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

// GET API REQUEST OF /posts TO GET ALL THE POSTS 
router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

// POST API REQUEST OF /posts END POINT TO CREATE POST
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.send(post);
});

module.exports = router;