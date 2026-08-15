const express = require("express");

const app = express();

const port = 8000;

app.get("/" ,(req,res)=>{
    res.send("Hello World");
});

app.get("/about" , (req , res)=>{
  res.send("this is the about page");
});

app.get("/users" , (req , res) =>{
  res.send("users to be shown here");
});

app.post("/user" , (req , res) =>{
  res.send("user registered successfully");
});

app.delete("/users" , (req , res) =>{
  res.send("user deleted successfully");
});

app.listen(port , ()=>{
  console.log(`running on port ${port}`)
});

