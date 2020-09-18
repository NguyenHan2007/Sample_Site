let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let ProductController = require('../controllers/ProductController');
    ProductController
        .getAll()
        .then(data => {
            res.locals.Products = data;
            res.render('products');
        })
        .catch(error => next(error));
});

router.get('/coffees&teas', (req, res, next) => {
    let TeatController = require('../controllers/TeaController');
    TeatController
        .getAll()
        .then(data => {
            res.locals.Teas = data;
            res.render('coffee_tea');
        })
        .catch(error => next(error));
});

router.get('/cakes', (req, res, next) => {
    let CakeController = require('../controllers/CakeController');
    CakeController
        .getAll()
        .then(data => {
            res.locals.Cakes = data;
            res.render('cakes');
        })
        .catch(error => next(error));
});
router.get('/Ice-Creams', (req, res, next) => {
    let CreamController = require('../controllers/CreamController');
    CreamController
        .getAll()
        .then(data => {
            res.locals.Creams = data;
            res.render('ice-cream');
        })
        .catch(error => next(error));
});

router.get('/:id', (req, res, next) => {
   let ProductController = require('../controllers/ProductController');
    ProductController
        .getById(req.params.id)
        .then(product => {
            res.locals.Products = product;
            //console.log(product)
            res.render('product_detail');
        })
        .catch(error=>next(error));
});

router.get('/coffees&teas/:id', (req, res, next) => {
    let TeaController = require('../controllers/TeaController');
    TeaController
         .getById(req.params.id)
         .then(tea => {
             res.locals.Teas = tea;
             res.render('tea_detail');
         })
         .catch(error=>next(error));
 });

 router.get('/cakes/:id', (req, res, next) => {
    let CakeController = require('../controllers/CakeController');
    CakeController
         .getById(req.params.id)
         .then(cake => {
             res.locals.Cakes = cake;
             res.render('cake_detail');
         })
         .catch(error=>next(error));
 });

 router.get('/Ice-Creams/:id', (req, res, next) => {
    let CreamController = require('../controllers/CreamController');
    CreamController
         .getById(req.params.id)
         .then(cream => {
             res.locals.Creams = cream;
             res.render('cream_detail');
         })
         .catch(error=>next(error));
 });


module.exports = router;