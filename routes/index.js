'use strict';

let express = require('express');
let router = express.Router();
let wikiRouter = require('./wiki');
let userRouter = require('./user');
let db = require('../models');



router.use('/wiki', wikiRouter);

module.exports = router;