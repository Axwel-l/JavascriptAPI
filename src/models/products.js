'use strict';

const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const schema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:[true,"o slug é obrigatorio"],
        trim:true,
        index:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
        required:true,
        default:true
    },
    tags:[{
        type:String,
        required:true
    }]//tag é uma string
});
/*
{
    "title":"Monitor",
    "price":"500",
    "description":"60 quadros",
    "slug":"30 polegadas",
    "active":true,
    "tags":[
        "Jogos","Informatica","monitor"
    ]
}
*/
module.exports = mongoose.model('Product',schema);