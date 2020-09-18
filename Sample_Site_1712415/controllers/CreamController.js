let controller = {};
let models = require('../models');
let Cream=models.Cream



controller.getAll=()=>{
    return new Promise((resolve,reject)=>{
        Cream
        .findAll({ 
            raw:true,
            attributes: ["id","name","imagepath","origin","price"]
        })
        .then(data=>resolve(data))
        .catch(error=>reject(new Error(error)));
    });
};

controller.getById=(id)=>{
    return new Promise((resolve,reject)=>{
        Cream
        .findOne({
            where:{id:id},
            raw:true
        })
        .then(result=>resolve(result))
        .catch(error=> reject(new Error(error)));
    });
};

module.exports=controller;