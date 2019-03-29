const tipo = (sequelize, DataTypes) => {
  const Tipo = sequelize.define('tipo', {
    nombre: {
      type: DataTypes.STRING,
    }
  });

  return Tipo;
};

module.exports = tipo;