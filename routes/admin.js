const express = require('express');
const routes = express.Router();
const path = require('path')
const rootDir = require('../utils/path')


routes.get('/add-product', (req, res, next) => {
    res.send("<h1>Add Product</h1><form action='http://localhost:3000/admin/stored-data' method='POST'><input type='text'name='title'/><input type='submit' value='submit'/> </form>");
});

routes.post('/stored-data', (req, res) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'))    
});



module.exports = routes;