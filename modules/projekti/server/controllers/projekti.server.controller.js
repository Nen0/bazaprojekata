'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
    sql = require('sequelize-sql-tag'),
    db = require(path.resolve('./config/lib/sequelize')),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.projektilist = function(req, res) {

    db.sequelize.query(`select p.id, p.name,p.pokretac_ppi as pokretac, v.name as vrsta,
     p.mjesto,p.nositelj, p.web,p.telefon, p.keywords, p.opis,
     p.suradnici,p.pocetak,p.kraj,p.kontakt
     from projekti p left join vrste v on p.vrsta_id =  v.id`, {
        raw: true
    }).then(function(projekt) {
        res.json({
            "data": projekt[0],
            "draw": 0,
            "recordsTotal": 178,
            "recordsFiltered": 178
        })
    });
};
exports.vrstecombo = function(req, res) {

    db.sequelize.query(`select id, name from vrste`, {
            type: db.sequelize.QueryTypes.SELECT
        })
        .then(vrste => {
            return res.json(vrste);
            // We don't need spread here, since only the results will be returned for select queries
        })
};
exports.dodajprojekt = function(req, res) {
    //console.log('idea kreirana');
    //console.log(req.session.passport);
    console.log('hakeri napaju');
    var user_id = req.session.passport.user
    console.log(req.body);
    var client_id = get_client_id(user_id);

    var query = sql `
            insert into projekti(
                name,
                vrsta_id
            )
            values(
                ${req.body.name},
                ${req.body.vrsta}
            )
            returning name
            `;
    db.sequelize.query(query, {
        raw: true
    }).then(function(result1) {
        res.json(result1[0])
    });
};

exports.updateprojekt = function(req, res) {
    //console.log('idea updateaneasa');
    var id = req.body.id;
    var query = sql `
                        update projekti set(
                           name,
                           vrsta_id
                        )
                        =(
                            ${req.body.name},
                            ${req.body.vrsta}
                            )
                            where id = ${id}
                            returning name
                    `;
        db.sequelize.query(query, {
            raw: true
        }).then(function(result) {
            res.json(result[0])
        });
};


function get_client_id(id) {
    var client_id = id;

    return client_id;
}