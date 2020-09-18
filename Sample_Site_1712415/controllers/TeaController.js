let controller = {};
let models = require('../models');
let Tea=models.Tea


controller.getAll=()=>{
    return new Promise((resolve,reject)=>{
        Tea
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
        Tea
        .findOne({
            where:{id:id},
            raw:true
        })
        .then(result=>resolve(result))
        .catch(error=> reject(new Error(error)));
    });
};

module.exports=controller;