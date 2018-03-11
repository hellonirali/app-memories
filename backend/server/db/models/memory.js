const Sequelize = require('sequelize');
const db = require('../db');

const Memory = db.define('memory', {
  title: {
    type: Sequelize.STRING,
  },
  mood: {
    type: Sequelize.STRING,
  },
  entry: {
    type: Sequelize.TEXT,
  },
  date: {
    type: Sequelize.STRING,
  },
});

module.exports = Memory;
