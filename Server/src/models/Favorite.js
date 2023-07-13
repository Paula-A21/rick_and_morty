const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      name:{
         type: DataTypes.STRING,
         len:[1, 30],
         unique: true,
         allowNull: false
      },
      status:{
         type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
         defaultValue: "Alive"
      }
   }, 
   { timestamps: false });
};
