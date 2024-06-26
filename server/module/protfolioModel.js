const mongoose = require("mongoose")

const introSchema = new mongoose.Schema({
    welcometext:{
        type:String,
        required:true
    },
    firstname:{
        type:String,

        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    }
});

const aboutSchema =new mongoose.Schema({
    imgurl:{
        type:String,
        required:true
    },
    des1:{
        type:String,
        required:true
    },
    des2:{
        type:String,
        required:true
    },skills:{
        type:Array,
        required:true
    }
});

const exper = new mongoose.Schema({
    Project:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }

});

const friend = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})

module.exports={
    Intro :mongoose.model("intros",introSchema),
    About:mongoose.model("about",aboutSchema),
    Exper:mongoose.model("exper",exper),
    Friend:mongoose.model("friend",friend)
}