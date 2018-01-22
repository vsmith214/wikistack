let express = require('express');
let router = express.Router();
//let addPage = require('../views/addpage.html');


router.get('/', (req, res, next) => {
    //if (err) next(err);
    res.redirect('/');
    res.end();
});

router.post('/', (req, res, next) => {
    //if (err) next(err);
    res.json(req.body);
    res.end();
});

router.get('/add', (req, res, next) => {
    //if (err) next(err);
    res.render('addpage');
    //res.end();
});


module.exports = router;