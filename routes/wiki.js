let express = require('express');
let router = express.Router();
let { Page, User } = require('../models');



router.get('/', (req, res) => {
    res.render('wikipage');

});

router.post('/', (req, res) => {
    //let Page = Page.
    var page = Page.build({
        title: req.body.title,
        content: req.body.content
    });

    page.save()
        .then((thePage) => {
            res.json(thePage);
        });
    //.catch(next);
});

router.get('/add', (req, res) => {
    res.render('addpage');

});




module.exports = router;