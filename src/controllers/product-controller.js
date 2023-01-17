'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model("Product");
const ValidationContract =  require("../validators/fluent-validator")

exports.get = (req,res,next) =>{
//active:true(só os produtos ativos)
//find({},'title price slug')(só aparece o que é pedido)
    Product.find({
        active :true
    },'title price slug').then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}

exports.getBySlug = (req,res,next) =>{
    Product
    //findOne/ja que o slug é unico assim não forma array
        .findOne({
            slug : req.params.slug,
            active :true
        },'title descrition price slug tags').then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        })
}

//Usado mais em empresas(por motivos obvios)
exports.getById = (req,res,next) =>{
    Product
        .findById( req.params.id)
        .then(data => {
                res.status(200).send(data);
        }).catch(e => {
                res.status(400).send(e);
        })
} 

exports.getByTag = (req,res,next) =>{
    Product
        .find({ tags: req.params.tag, active:true})
        .then(data => {
                res.status(200).send(data);
        }).catch(e => {
                res.status(400).send(e);
        })
}

exports.post = (req,res,next)=>{
    let contract = new ValidationContract();
{/*  
    !!!! Descobrir uma forma de fazer o JS esperar o "contract..." seja executado antes do "if"(isso imede a validação de ser completa)    

    contract.hasMinLen(req.body.title,5,'O titulo deve contar pelo menos 5 caracteres');
    contract.hasMinLen(req.body.slug,5,'A slug deve contar pelo menos 5 caracteres');
    contract.hasMinLen(req.body.description,5,'A description deve contar pelo menos 5 caracteres');
    
    //Se os dados forem invalidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }
*/}
    //var product = new Product(req.body);
    //instancia direta/mais simples só que mais perigosa(não especifica parametros)
    var product = new Product(req.body);
    // product.title=req.body.title;
    product.save().then(x => {
        res.status(201).send({message: 'Produto cadastrado com sucesso'})

    }).catch(e => {
        res.status(400).send({
            message: 'falha ao cadastrar produto',
            data: e
        })
    });
}

exports.put = (req,res,next) =>{
    Product.findByIdAndUpdate(req.params.id,{
        $set: {
            //só precisa digita o que quer alterar
            title :req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug,
            tags:req.body.tags
        }
    }).then(x => {
        res.status(200).send({
            message : 'Produto atualizado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao atualizar produto',
            data :e
        });
    })
}


exports.delete = (req,res,next) =>{
    Product.findOneAndRemove(req.body.id)//(req.params.id)
    .then(x => {
        res.status(200).send({
            message : 'Produto removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover produto',
            data :e
        });
    })
}

