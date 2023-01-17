'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model("Product");

exports.get = () =>{
    return Product.find({
        active :true
    },'title price slug');
}

exports.getBySlug = (slug)=>{
    return Product
    //findOne/ja que o slug é unico assim não forma array
        .findOne({
            slug : slug,
            active :true
        },'title descrition price slug tags');
}

exports.getById = (id) =>{
    return Product
        .findById( id);
}

exports.getByTag = (tag)=>{
    return Product
    //findOne/ja que o slug é unico assim não forma array
        .find({
            tags : tag,
            active :true
        },'title descrition price slug tags');
}

exports.create = (data) => {
    var product = new Product(data);
    // product.title=req.body.title;
    return product.save();
}

exports.update = (id,data) =>{
    return Product
    .findByIdAndUpdate(id,{
        $set: {
            //só precisa digita o que quer alterar
            title :data.title,
            description: data.description,
            price: data.price,
            slug: data.slug,
            tags:data.tags
        }
    })
}

exports.delete = (id) =>{
    return Product.findOneAndRemove(id);
}