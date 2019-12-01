 
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('financiranja', {
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
    tableName: 'financiranja',
    timestamps: false
  });
};

 

