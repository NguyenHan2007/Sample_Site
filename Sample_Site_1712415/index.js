let express = require('express');
let app = express();

let expresshbs = require('express-handlebars');
let hbs = expresshbs.create(
    {
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts/',
        partialsDir: __dirname + '/views/partials/',
    }
);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.use('/products',require('./routes/ProductRouter'));
/*
app.get('/products/coffees&teas', (req, res) => {
    res.render('coffee_tea');
});
*/
app.get('/products/Ice-Creams', (req, res) => {
    res.render('ice-cream');
});
app.get('/products/cakes', (req, res) => {
    res.render('cakes');
});
app.get('/store', (req, res) => {
    res.render('store');
});


app.get('/sync',(req,res)=>{
    let models = require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('database sync comleted!');
    });
});
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 4000);


app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});