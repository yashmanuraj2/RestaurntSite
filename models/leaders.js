
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const leaderSchema = new Schema({
    Name:  {
        type: String,
        
        
        required: true
    },
    image:  {
        type:String,
        
    },
    Designation:  {
        type: String,

        required: true
    },

    abbr : {
            type : String,
            

    },
   description : {
     type : String,
     default : "",
     required : true
     
   },
   label:
   {
       type : String,
       required : true
   }, 
   featured : {
            type : Boolean,
            required : true

  }


}, {
    timestamps: true
});
var Leaders = mongoose.model('Leaders',leaderSchema);
module.exports=  Leaders;