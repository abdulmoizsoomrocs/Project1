const express = require("express");
const app = express();

const port  = 8000;
app.use( express.json() );
const users = [
    { id: 1, name: "Ali", email: "ali@gmail.com" },
    { id: 2, name: "Ahmed", email: "ahmed@gmail.com" }
];


app.get("/users" , (req,res)=>{
    res.json(users);
})

app.get("/users/:id" , (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id);
    if(!user){
       return res.status(404).json("user not found");
    }
    res.json(user);
})

app.post("/users"  , (req, res)=>{
      const user = {
        id : users.length +1,
        name : req.body.name,
        email : req.body.email
      };

    console.log(user);
      users.push(user);
      res.status(201).send("user Registered successfully");


})

app.patch("/users/:id" , (req , res) =>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id);
    if(!user){
       return res.status(404).json("user not found");
    }
    user.email= req.body.email;
    user.name = req.body.name;
    res.json(user);
});


app.delete("/users/:id" , (req , res)=>{
    const id = Number(req.params.id);
    const idx = users.findIndex(user => user.id == id);
    if(idx === -1){
       return res.status(404).json("user not found");
    } 
users.splice(idx, 1);
res.json("user deleted successfully");

});

app.listen(port);
