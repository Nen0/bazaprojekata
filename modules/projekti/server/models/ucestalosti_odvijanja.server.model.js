 
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucestalosti_odvijanja', {
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
    tableName: 'ucestalosti_odvijanja',
    timestamps: false
  });
};

 

