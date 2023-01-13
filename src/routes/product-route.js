'use strict';

const express = require('express');
const router =express.Router();
const controller = require('../controllers/product-controller')

router.put('/:id',controller.put);


module.exports = router