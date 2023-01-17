'use strict';

const express = require('express');
const router =express.Router();
const controller = require('../controllers/product-controller')

router.get('/',controller.get);
router.get('/:slug',controller.getBySlug);
//compor a url para diferenciar do getBySlug
router.get('/admin/:id',controller.getById);
router.get('/tags/:tag',controller.getByTag);
router.put('/:id',controller.put);
router.post('/',controller.post);
//router.delete('/:id',controller.delete);remover pelo parametro
router.delete('/',controller.delete);//remover pelo body

module.exports = router