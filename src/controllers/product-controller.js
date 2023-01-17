'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model("Product");
const ValidationContract =  require("../validators/fluent-validator")
const repository = require('../repositores/product-repository')

exports.get = (req,res,next) =>{
//active:true(só os produtos ativos)
//find({},'title price slug')(só aparece o que é pedido)
    repository.get().then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}

exports.getBySlug = (req,res,next) =>{
   repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        })
}

//Usado mais em empresas(por motivos obvios)
exports.getById = (req,res,next) =>{
    repository.getById(req.params.id)
        .then(data => {
                res.status(200).send(data);
        }).catch(e => {
                res.status(400).send(e);
        })
} 

exports.getByTag = (req,res,next) =>{
    repository.getByTag(req.params.tag)
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
    repository.create(req.body)
    .then(x => {
        res.status(201).send({message: 'Produto cadastrado com sucesso'})

    }).catch(e => {
        res.status(400).send({
            message: 'falha ao cadastrar produto',
            data: e
        })
    });
}

exports.put = (req,res,next) =>{
    repository.update(req.params.id,req.body).then(x => {
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
    repository.delete(req.param.id)//(req.params.id)
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

