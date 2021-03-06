'use strict';

const mongoose = require('mongoose');
const BlogPostSchema = require("../models/model").BlogPostModel;
const UserSchema = require("../models/model").UserModel;


const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var BlogPostSerializer = require('../serializers/blogpost');
var UserSerializer = require('../serializers/user');



const router = express.Router();


//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
router.post('/users', passport.authenticate('user', { session : false }) , async (req, res, next) => {
    res.json({
        message : 'Signup successful',
        user : req.user
    });
});

router.get('/users',(req, res) => {
    UserSchema.find({}, (err,user) => {
        if(err) {
            res.send(err);
        }
        var jsonapi = UserSerializer.serialize(user);
        res.send(jsonapi);

    })
});

router.get('/blogposts/:id',(req, res) => {
    BlogPostSchema.find({_id:req.params.id}, (err,blogpost) => {
        if(err) {
            res.send(err);
        }
        //Serialize blogpost to send
        var jsonapi = BlogPostSerializer.serialize(blogpost);
        res.send(jsonapi);
    })
});

router.get('/blogposts',(req, res) => {
    BlogPostSchema.find({}, (err,blogpost) => {
        if(err) {
            res.send(err);
        }
        //Serialize reversed blogpost to send
        var jsonapi = BlogPostSerializer.serialize(blogpost);
        res.send(jsonapi);
    })
});


router.post('/blogposts',  (req, res) => {
    let newBlogPost = new BlogPostSchema(req.body);

    newBlogPost.save((err, blogpost) => {
        if(err){
            res.send(JSON.stringify(err));
        }
        res.json('Success');
    });
});


router.post('/login', async (req, res, next) => {

    passport.authenticate('login', async (err, user, info) => {     try {
        if(err || !user){
            const error = new Error('An Error occured');
            return next(error);
        }
        req.login(user, { session : false }, async (error) => {
            if( error ) {
                return next(error)
            }
            //We don't want to store the sensitive information such as the
            //user password in the token so we pick only the email and id
            const body = { _id : user._id, email : user.email };
            //Sign the JWT token and populate the payload with the user email and id
            const token = jwt.sign({ user : body },'top_secret');
            //Send back the token to the user
            return res.json({ token });
        });     } catch (error) {
        return next(error);
    }
    })(req, res, next);
});

module.exports = router;
