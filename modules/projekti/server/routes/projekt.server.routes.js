'use strict';

/**
 * Module dependencies
 */
var projektPolicy = require('../policies/projekti.server.policy'),
    projekt = require('../controllers/projekti.server.controller');

module.exports = function(app) {

    app.route('/api/projekti')
        .get(projekt.projektilist)
        .put(projekt.updateidea)
        .post(projekt.dodajprojekt)

    app.route('/api/getvrstecombo')
        .get(projekt.vrstecombo)
};