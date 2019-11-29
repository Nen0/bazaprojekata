'use strict';

/**
 * Module dependencies
 */
var programPolicy = require('../policies/programi.server.policy'),
    programi = require('../controllers/programi.server.controller');

module.exports = function(app) {

    app.route('/api/programi')
        .get(programi.programilist)
};