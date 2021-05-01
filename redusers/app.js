const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const redis = require('redis')

//Set port
const port = 3000;

// Init app
const app = express();

// View Engine
app.engine('handlebars', exphbs({defaultLayout:'main'})); //layout we use has to be called main.handlebars
app.set('view engine', 'handlebars');

// body-parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// methodOverride
app.use(methodOverride('_method'));

app.get('/', function(req, res, next){
    res.render('searchusers');
});

app.listen(port, function(){
    console.log('Server started on port '+port);
})