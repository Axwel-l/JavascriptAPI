'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model("Product");
const ValidationContract =  require("../validators/fluent-validator")
const repository = require('../repositores/product-repository')


exports.get = async(req,res,next) =>{
    try{
        var data = await repository.get();
        res.status(200).send(data)
    }catch(e){
        res.status(500).send({
            message:'Falha ao processar seu pedido'
        })
    }
    
}
exports.getBySlug =async (req,res,next) =>{
    try{
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    }catch(e) {
            res.status(500).send({
                message:'Falha ao processar seu pedido'
            });
    }
}

//Usado mais em empresas(por motivos obvios)
exports.getById = async(req,res,next) =>{
    try{
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message:'Falha ao processar seu pedido'
        });
    }
} 

exports.getByTag = async(req,res,next) =>{
    try{
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message:'Falha ao processar seu pedido'
        });
    }
}

exports.post = (req,res,next)=>{
{
    /*async e await tambem não estou conseguindo fazer funcionar(apenas no post)
    
    let contract = new ValidationContract();
    
    //!!!! Descobrir uma forma de fazer o JS esperar o "contract..." seja executado antes do "if"(isso imede a validação de ser completa)    

    contract.hasMinLen(req.body.title, 5, 'O titulo deve contar pelo menos 5 caracteres');
    
    //Se os dados forem invalidos
    if(false == contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }*/
}

        repository
        .create(req.body)
        .then(x =>{
            res.status(201).send({
                message: 'Produto cadastrado com sucesso'
            });   
        }).catch(e =>{
            res.status(400).send({
                message:'Falha ao processar seu pedido',
                data : 'e'
            });
        });
}

exports.put = async(req,res,next) =>{
    try{
    await repository.update(req.params.id,req.body);
    res.status(200).send({
        message : 'Produto atualizado com sucesso!'
    });
    }catch(e){
        res.status(500).send({
            message:'Falha ao processar seu pedido'
        });
    }
};

exports.delete = async(req,res,next) =>{
    try{
    await repository.delete(req.param.id);
    res.status(200).send({
            message : 'Produto removido com sucesso!'
        });
    }catch(e){
        res.status(500).send({
            message:'Falha ao processar seu pedido'
        });
    }
};

