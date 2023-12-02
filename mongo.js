const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/watch_store")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection

//mongodb://localhost:27017/