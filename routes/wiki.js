let express = require('express');
let router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        if (err) next(err);
        res.send('got to GET /wiki/');
        res.end();
    });

    router.post('/', (req, res, next) => {
        if (err) next(err);
        res.send('got to POST /wiki/');
        res.end();
    });

    router.get('/add', (req, res, next) => {
        if (err) next(err);
        res.send('got to GET /wiki/add');
        res.end();
    });
}