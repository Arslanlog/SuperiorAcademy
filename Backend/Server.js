const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb://localhost:27017/SuperiorAcademy",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Success")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.end("Hy");
})


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({credentials: true, origin:'http://localhost:3000'}));

//user schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
}) 
const UserDB = mongoose.model("UserDB", UserSchema)

app.post("/Data",(req,res)=>{
console.log("run");
    try{

    const Data = new UserDB({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    Data.save().then(()=>{console.log("Saved"); res.json("Done")});
    }
    catch(err)
    {
        res.json(@"error")
        console.log(err)
    }

})

app.listen(8000,console.log(`server is running on http://localhost:8000/`))