/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programi', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vrsta_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nositelj: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mjesto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    web: {
      type: DataTypes.STRING,
      allowNull: true
    },telefon: {
      type: DataTypes.STRING,
      allowNull: true
    },keywords: {
      type: DataTypes.STRING,
      allowNull: true
    },opis: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    tableName: 'programi',
    timestamps: false
  });
};