const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const promoSchema = new Schema({
    Name:  {
        type: String,
        
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    label:  {
        type: String,

        required: true
    },

    price : {
            type : Number,
            required:true

    },
   description : {
     type : String,
     default: "",
     required : true
     
   },
   featured : {
            type : Boolean,
            required : true

  }


}, {
    timestamps: true
});

var Promotions = mongoose.model('Promotions',promoSchema );
module.exports = Promotions;