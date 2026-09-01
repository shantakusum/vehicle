'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize,DataTypes} = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: process.env.DB_DIALECT,
        logging: false,
        pool: {
            "max": 10,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    });

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
	const model = require(path.join(__dirname, file))(sequelize, DataTypes);
	db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.authenticate()
  .then(() => {
      console.log('--- DATABASE CONNECTED SUCCESSFULLY ---');
      //return sequelize.sync();
      return sequelize.sync({ alter: true }) // यहाँ सिंक करें
  })
  .then(() => {
      console.log('--- DATABASE MODELS SYNCED ---');
  })
  .catch(error => {
      console.error('!!! DATABASE CONNECTION ERROR !!!:', error);
  });

module.exports = db;