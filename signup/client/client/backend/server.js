
const express =require('express');
const dotenv =require('dotenv').config()
const mongoose =require('mongoose');
const cors = require ('cors');
const  userModel = require("./model/Schemas");
const URI = process.env.MONGO_URI;
const port = process.env.PORT || 50001


const app = express();
app.use=(cors());



const uri = "mongodb+srv://emilysbongile177:Emily.20@cluster0.1lqvov6.mongodb.net/?retryWrites=true&w=majority";

console.log(uri)
mongoose.connect(uri)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));



app.get("/api/users", (req, res) => {
   userModel.find({}).then(function(users){
      res.status(202).json({ message:'hello' })
      
    }).catch(function(err){
      console.log(err)
  
    })
  });
  
  app.post("/api/users", async (req, res) => {
    try{
      const user = await new   userModel(req.body).save();
      res.send(200).json({ message: 'User details added successfully' });
    }catch(e){
      console.log(e);
    }
  });



app.listen(port,() => console.log(`server is running ${port}`));
