const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    title :  {type : String,required :true},
    parent : {type : mongoose.Types.ObjectId , ref : "category" , defult :undefined}
},{
    id : false ,
    toJSON :{
        virtuals :true
    },
    timestamps: true
});

module.exports ={
    CategoryModel : mongoose.model("category",Schema)
}