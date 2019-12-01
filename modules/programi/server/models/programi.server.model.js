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
    opis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vrsta_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pokretac_ppi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    suradnici: {
      type: DataTypes.STRING,
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
    geografski_opsezi_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dobni_opsezi_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pocetak: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kraj: {
      type: DataTypes.STRING,
      allowNull: true
    },

    financiranja_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    web: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kontakt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ucestalosti_odvijanja_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    promovirano_fb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kratki_tekst_fb: {
      type: DataTypes.STRING,
      allowNull: true
    },

    dobivene_nagrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dodjeljuje_nagrade: {
      type: DataTypes.STRING,
      allowNull: true
    },


    azurirao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    napomena: {
      type: DataTypes.STRING,
      allowNull: true
    },

    
    
    
  }, {
    tableName: 'programi',
    timestamps: false
  });
};