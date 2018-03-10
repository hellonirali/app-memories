const Sequelize = require('sequelize');
const db = require('../db');

const Memory = db.define('memory', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mood: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entry: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Memory;
