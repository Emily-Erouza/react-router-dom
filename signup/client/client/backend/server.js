
const express =require('express');
const dotenv =require('dotenv').config()
const mongoose =require('mongoose');
const cors = require ('cors'); 
const  userModel = require("./model/Schemas");
const bodyParser = require('body-parser');
const URI = process.env.MONGO_URI;
const port = process.env.PORT || 50001

const app = express();
app.use(cors());
app.use(bodyParser())


const uri = "mongodb+srv://emilysbongile177:Emily.20@cluster0.1lqvov6.mongodb.net/form?retryWrites=true&w=majority";

console.log(uri)
mongoose.connect(uri)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));


app.get("/api/users", (req, res) => {
   userModel.find({}).then(function(user){
      res.status(202).json(user)
    }).catch(function(err){
      console.log(err)
    })
  });
  
  app.post("/api/users", async (req, res) => {
    console.log(req.body)
    userModel.create(req.body)
    res.send()
  });


app.listen(port,() => console.log(`server is running ${port}`));
