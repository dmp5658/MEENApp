var supertest = require("supertest");
var should = require("should");
var shouldhttp = require("should-http");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("Unit test",function(){


    //Blogposts test
    it("Should return all blogposts",function(done){

        server
            .get("/blogposts")
            .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                // Body result should be an array
                done();
            });
    });

    it("Should post a blogpost",function(done){

        server
            .post("/blogposts")
            .send({title: "ABCDEFG" ,body: "ABCDEFG"})
            .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });
    });

    it("Should return a single blogpost with id 5c646ab926c38d4fb83b0972",function(done){

        server
            .get("/blogposts/5c6381abf668994cfc8329e3")
            .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });
    });

    //User tests
    it("Should sign up a user",function(done){

        server
            .post("/users")
            .send({email: "testusername8@test.com" ,password: "testpassword"})
            .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                res.body.should.have.property('message').which.equals('Signup successful');
                done();
            });
    });

    it("Try to signup a user with already created email",function(done){

        server
            .post("/users")
            .send({email: "testusername8@test.com" ,password: "testpassword2"})
            .expect("Content-type",/json/)
            .expect(500) // THis is HTTP response
            .end(function(err,res){
                // HTTP status should be 500
                res.status.should.equal(500);
                done();
            });

    });

    it("Should login already created user from previous post to user ",function(done){

        server
            .post("/login")
            .send({email: "testusername8@test.com" ,password: "testpassword"})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });
    });

    it("Should attempt to login with previous email but incorrect password",function(done){

        server
            .post("/login")
            .send({email: "testusername8@test.com" ,password: "testpassword2"})
            .expect("Content-type",/json/)
            .expect(500) // THis is HTTP response
            .end(function(err,res){
                res.status.should.equal(500);
                done();
            });
    });


});