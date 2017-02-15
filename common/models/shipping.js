'use strict';
var shippingOptions = require("../../server/DB/storage/prices/shippingOptions.json")
module.exports = function (Shipping) {

    Shipping.getShippingOptionsByPid = function (pid, cb) {
        var response = null;
        for (var o in shippingOptions) {
            var option = shippingOptions[o];
            if (option.pids.indexOf(pid) > -1)
                response = option.shippingGroups;
        }


        cb(null, response);
    };

    Shipping.remoteMethod('getShippingOptionsByPid', {
        accepts: {
            arg: 'pid',
            type: 'string'
        },
        returns: {
            arg: 'response',
            type: 'object'
        },
        http: {
            path: '/getShippingOptionsByPid',
            verb: 'get'
        }
    });

};



