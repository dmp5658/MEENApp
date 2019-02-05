const express = require('express');
const BlogPostSchema = require("../models/model").BlogPostModel;

const router = express.Router();

//Lets say the route below is very sensitive and we want only authorized users to have access

//Displays information tailored according to the logged in user
router.get('/profile', (req, res, next) => {
    //We'll just send back the user details and the token
    res.json({
        message : 'You made it to the secure route',
        user : req.user,
        token : req.query.secret_token
    })
});

router.post('/createblogpost',  (req, res) => {

    console.log(req.body);
    let newBlogPost = new BlogPostSchema(req.body);

    newBlogPost.save((err, blogpost) => {
        if(err){

            res.send(err +" "+blogpost);
        }
        console.log(blogpost);
        res.json(blogpost);
    });
});


module.exports = router;