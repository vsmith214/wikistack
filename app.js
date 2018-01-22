let makesRouter = require('./routes');
let { Page, User } = require('./models');
let nunjucks = require('nunjucks');
var morgan = require('morgan');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
const path = require('path');


// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later. 
var env = nunjucks.configure('views', { noCache: true });
// have res.renderwork with html files 
app.set('view engine', 'html'); // when res.render works with html files, have it use nunjucks to do so app.engine('html', nunjucks.render);
app.engine('html', nunjucks.render);

app.use(morgan('dev')); // what is dev????????????????????????

User.sync({ force: true })
    .then(() => {
        Page.sync({ force: true })
    })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        });
    })
    .catch(console.err);

//let server = app.listen(3000, () => console.log("Server finally here"));

app.use(express.static(path.join(__dirname, '/public'))); // What is __dirname???????????