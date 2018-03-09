const Sequelize = require('sequelize');
const db = require('../db');

const Memory = db.define('memory', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  mood: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  entry: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
});

module.exports = Memory;
