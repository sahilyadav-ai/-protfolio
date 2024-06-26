const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sy9034431150:sahil123@firstd.vklel9n.mongodb.net/me");

const connection =mongoose.connection;

connection.on("error",()=>{
    console.log("error")
})
connection.on("connected",()=>{
    console.log("connected to monoose db ")
})

module.exports=connection;
