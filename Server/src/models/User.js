const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      email:{
         type: DataTypes.STRING,
         isEmail: true,
         notNull: false
      },
      password:{
         type: DataTypes.STRING,
         is: ["^[a-z]+$", 'i'],
         len:[8,15],
         notNull: false
      }
   }, 
   { timestamps: false });
};
