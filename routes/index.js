const express=require('express')
const homeController = require('../controller/homeController');
const Router=express.Router()


// this is the entry point of all the api named url's
console.log("SUCCESSFULL I am in")
Router.use('/api',require('./api/index'));
Router.get('/',homeController.homePage);
module.exports=Router