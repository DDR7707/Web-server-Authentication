//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")

const app = express()

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true},{useUnifiedTopology:true})

const userschema = {
  email : String,
  password  : String
}

const User = new mongoose.model("User",userschema)

app.listen(3000,function(){
  console.log("server listening at port 3000")
})

app.get("/",function(req,res){
  res.render("home")
})

app.get("/Login",function(req,res){
  res.render("login")
})

app.get("/register",function(req,res){
  res.render("register")
})

app.post("/register",function(req,res){
  const newuser = new User({
    email : req.body.username,
    password : req.body.password
  })

  newuser.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render("secrets")
    }
  })
})

app.post("/login",function(req,res){
  const usernew = req.body.username
  const passcode = req.body.password
  User.findOne({email : usernew},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if (foundUser){
        if (foundUser.password === passcode){
          res.render("secrets")
        }else{
          res.send("Incorrect username or password")
        }
      }
    }
  })
})
