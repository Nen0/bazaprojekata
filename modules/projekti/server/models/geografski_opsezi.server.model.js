 
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geografski_opsezi', {
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
    tableName: 'geografski_opsezi',
    timestamps: false
  });
};

 

