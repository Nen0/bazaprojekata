'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
    sql = require('sequelize-sql-tag'),
    db = require(path.resolve('./config/lib/sequelize')),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.projektilist = function(req, res) {

    db.sequelize.query(`select p.id, p.name, v.name as vrsta, p.mjesto,p.nositelj, p.web,p.telefon, p.keywords, p.opis   from projekti p left join vrste v on p.vrsta_id =  v.id`, {
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
                1
            )
            returning name
            `;
    db.sequelize.query(query, {
        raw: true
    }).then(function(result1) {
        res.json(result1[0])
    });
};

exports.updateidea = function(req, res) {
    //console.log('idea updateaneasa');
    var id = req.body.id;
    var user_id = req.session.passport.user
    var query = sql `
                update sadrzaj set (
                    modified_by,
                    modified_ts,
                    name
                )
                =(
                    ${parseInt(user_id)},
                    now(),
                    ${req.body.naziv}
                )
                where id = ${id}`;
    db.sequelize.query(query, {
        raw: true
    }).then(function(result) {
        var query = sql `
                        update projekt set(
                           naziv
                        )
                        =(
                            ${req.body.naziv}
                            )
                            where id = ${id}
                            returning id, naziv
                    `;

        db.sequelize.query(query, {
            raw: true
        }).then(function(result) {
            res.json({
                "status": "success"
            })
        });
    });
};


function get_client_id(id) {
    var client_id = id;

    return client_id;
}