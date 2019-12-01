 
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dobni_opsezi', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dobni_opsezi',
    timestamps: false
  });
};

 

