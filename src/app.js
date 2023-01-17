'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router

//conecta ao banco
mongoose.connect('mongodb+srv://admin:admin@ndstr.o0d1pqf.mongodb.net/test');

//carrega os Models
const Product = require('./models/products');

//Carrega as rotas
const indexRoute = require('./routes/index-route')
//const productsRoute =require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//versão inicia da rotas
/*const route = router.get('/',(req, res, next) =>{
    res.status(200).send({
        title:"Node Store API",
        version: "0.0.2"
    });
});*/

/*
const create = router.post('/',(req,res,next)=>{
    res.status(201).send(req.body);
})

const put = router.put('/:id',(req,res,next)=>{
    const id = req.params.id;
    res.status(200).send({
        id :id,
        item: req.body
    });
})

const del = router.delete('/',(req,res,next)=>{
    res.status(200).send(req.body);
})*/
app.use('/',indexRoute);
//app.use('/products',productsRoute);

//exportar o app/express
module.exports=app;