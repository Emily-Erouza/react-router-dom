
const express =require('express');
const dotenv =require('dotenv').config()
const mongoose =require('mongoose');
const cors = require ('cors')
const URI = process.env.MONGO_URI;
const port = process.env.PORT  || 5000
const {saveuserDetails} = require ("./postRoutes/routes")

const app = express();
app.use=(cors());



const url2 = "mongodb+srv://emilysbongile17:Emily.20@cluster0.9ucgs2k.mongodb.net/?retryWrites=true&w=majority"
console.log(url2)
mongoose.connect(url2).then(res => console.log("mongodb is connected")).catch(e => console.log("eeeee", e))



app.get("/api/getDetails", (req, res) => {
   const user =  UserModel.find({}).then(function(users){
      res.status(202).json(users)
      
    }).catch(function(err){
      console.log(err)
  
    })
  });
  
  app.post("/api/userDetails", async (req, res) => {
    try{
      const user = await new UserModel(req.body).save();
      res.send(200).json({ message: 'User details added successfully' });
    }catch(e){
      console.log(e);
    }
  });





app.listen(port,() => console.log(`server is running ${port}`))
