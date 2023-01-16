'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model("Product");

exports.get = (req,res,next) =>{
//active:true(só os produtos ativos)
//find({},'title price slug')(só aparece o que é pedido)
    Product.find({active :true},'title price slug').then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}

exports.post = (req,res,next)=>{
//  var product = new Product(req.body);
//instancia direta/mais simples só que mais perigosa(não especifica parametros)
    var product = new Product(req.body);
//    product.title=req.body.title;
    product.save().then(x => {
        res.status(201).send({message: 'Produto cadastrado com sucesso'})

    }).catch(e => {
        res.status(400).send({
            message: 'falha ao cadastrar produto',
            data: e
        })
    });
}

exports.put=(req,res,next)=>{
    const id = req.params.id;
    res.status(200).send({
        id :id,
        item: req.body
    });
};

exports.delete=(req,res,next)=>{
    res.status(200).send(req.body);
};

