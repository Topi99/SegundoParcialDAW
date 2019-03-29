const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://vbyacpoc:GhgkQmWSolIltR7_NQEo_Xk30mgCVC4N@isilo.db.elephantsql.com:5432/vbyacpoc', { dialect: 'postgres' });


const models = {
  Incidente: sequelize.import('./incidente'),
  Lugar: sequelize.import('./lugar'),
  Tipo: sequelize.import('./tipo'),
}

global.db = {
  Sequelize,
  sequelize,
  models
};

module.exports = global.db;