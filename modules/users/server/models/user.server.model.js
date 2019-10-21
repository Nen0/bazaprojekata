'use strict';

var crypto = require('crypto'),
    validator = require('validator'),
    generatePassword = require('generate-password'),
    owasp = require('owasp-password-strength-test');



/**
 * Exports
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define('User', {
        displayName: DataTypes.STRING,
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            allowNull: function() {
                var isLocal = this.provider === 'local';
                return isLocal;
            },
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        classMethods: {
            /**
             * Associate
             * @param  {[type]} models [description]
             * @return {[type]}        [description]
             */
            associate: function(models) {
                User.belongsToMany(models.Role, {
                    through: 'UserRole'
                });
            },
            /**
             * Find unique username
             * @param  {[type]}   username [description]
             * @param  {[type]}   suffix   [description]
             * @param  {Function} callback [description]
             * @return {[type]}            [description]
             */
            findUniqueUsername: function(username, suffix, callback) {
                var _this = this;
                var possibleUsername = username.toLowerCase() + (suffix || '');

                _this
                    .findOne({
                        where: {
                            username: possibleUsername
                        }
                    })
                    .then(function(user) {
                        if (!user) {
                            callback(possibleUsername);
                        } else {
                            return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
                        }

                        return null;
                    })
                    .catch(function(err) {
                        console.log(err);
                        callback(null);
                    });
            },
        },
        instanceMethods: {
            /**
             * Authenticate
             * @param  {[type]} user     [description]
             * @param  {[type]} password [description]
             * @return {[type]}          [description]
             */
            authenticate: function(user, password) {
                //var passDB = user.dataValues.password;
                let hash = crypto.createHash('md5').update(password).digest("hex");
                return user.dataValues.password === hash;
            }
        }
    });

    return User;
};