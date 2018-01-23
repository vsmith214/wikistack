let makesRouter = require('./routes');
let { Page, User } = require('./models');
let nunjucks = require('nunjucks');
var morgan = require('morgan');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later. 
var env = nunjucks.configure('views', { noCache: true });
// have res.renderwork with html files 
app.set('view engine', 'html'); // when res.render works with html files, have it use nunjucks to do so app.engine('html', nunjucks.render);


app.engine('html', nunjucks.render);



app.use(morgan('dev')); // what is dev????????????????????????
app.use(makesRouter);



User.sync() //If it doesnt exist create on and if it does make sure it matches the schema in this model
    .then(() => {
        return Page.sync()
    })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        });
    })
    .catch(console.err);

app.use(express.static(path.join(__dirname, 'public'))); // What is __dirname???????????