'use strict';

let express = require('express');
let router = express.Router();
let wikiRouter = require('./wiki');
let userRouter = require('./user');
let db = require('../models');



router.get('/', (req, res, next) => res.render('index'));
router.use('/wiki', wikiRouter);
router.use('/user', userRouter);


module.exports = router;