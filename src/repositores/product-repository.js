/*!!! Aviso para o eu do Futuro
Se quiser saber a versão anterior de algum metodo
antes de ser melhorado olha no git.*/
//E pesquisar mais caracteristicas do "async" e "await"

'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model("Product");

exports.get = async() =>{
    const res = await  Product.find({
        active :true
    },'title price slug');
    return res;
}

exports.getBySlug = async(slug)=>{
    const res = await Product
    //findOne/ja que o slug é unico assim não forma array
        .findOne({
            slug : slug,
            active :true
        },'title descrition price slug tags');
    return res;
}

exports.getById = async(id) =>{
    const res = await Product
        .findById( id);
    return res;
}

exports.getByTag = async(tag)=>{
    const res = await Product
    //findOne/ja que o slug é unico assim não forma array
        .find({
            tags : tag,
            active :true
        },'title descrition price slug tags');
    return res;
}

exports.create = async(data) => {
    var Product = new Product(data);
    // product.title=req.body.title;
    await Product.save();
}

exports.update = async(id,data) =>{
    await Product
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

exports.delete = async(id) =>{
    await Product.findOneAndRemove(id);
}