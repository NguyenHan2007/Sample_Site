let controller = {};
let models = require('../models');
let Product = models.Product

controller.getAll=()=>{
    return new Promise((resolve,reject)=>{
        Product
        .findAll({ 
            raw:true,
            attributes: ["id","name","imagepath","origin","price"]
        })
        .then(data=>resolve(data))
        .catch(error=>reject(new Error(error)));
    });
};




// view detail
controller.getById=(id)=>{
    return new Promise((resolve,reject)=>{
        Product
        .findOne({
            where:{id:id},
            raw:true
        })
        .then(result=>resolve(result))
        .catch(error=> reject(new Error(error)));
    });
};

module.exports=controller;