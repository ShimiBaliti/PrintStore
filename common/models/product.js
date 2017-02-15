'use strict';
var products = require("../../server/DB/storage/products/productsSpec.json")
module.exports = function (Product) {

    Product.getProducts = function (cb) {
        var response = products.products;
        cb(null, response);
    };

    Product.remoteMethod('getProducts', {
        returns: {
            arg: 'response',
            type: 'object'
        },
        http: {
            path: '/getProducts',
            verb: 'get'
        }
    });

};



