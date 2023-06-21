// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create comments object
const commentsByPostId = {};

// Create endpoint for getting comments by post id
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// Create endpoint for creating comments by post id
app.post('/posts/:id/comments', (req, res) => {
    // Generate random id
    const commentId = randomBytes(4).toString('hex');
    // Get the comment content from the body of the request
    const { content } = req.body;
    // Get the comments for the post id from the comments object
    const comments = commentsByPostId[req.params.id] || [];
    // Add the new comment to the comments array
    comments.push({ id: commentId, content });
    // Add the comments array to the comments object
    commentsByPostId[req.params.id] = comments;
    // Send the comments array
    res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
    console.log('Comments service listening on port 4001');
});

