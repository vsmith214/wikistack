let makesRouter = require('./routes');
let { Page, User } = require('./models');
let nunjucks = require('nunjucks');
var morgan = require('morgan');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
const path = require('path');

app.use(bodyParser.json());
// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later. 
var env = nunjucks.configure('views', { noCache: true });
// have res.renderwork with html files 
app.set('view engine', 'html'); // when res.render works with html files, have it use nunjucks to do so app.engine('html', nunjucks.render);
//app.set("views", path.join(__dirname, "views"));

app.engine('html', nunjucks.render);



app.use(morgan('dev')); // what is dev????????????????????????
app.use(makesRouter);

app.get('/', (req, res, next) => res.send('Hello there'));

User.sync({ force: false })
    .then(() => {
        Page.sync({ force: false })
    })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        });
    })
    .catch(console.err);

app.use(express.static(path.join(__dirname, 'public'))); // What is __dirname???????????