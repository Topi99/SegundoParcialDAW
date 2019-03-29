const lugar = (sequelize, DataTypes) => {
  const Lugar = sequelize.define('lugar', {
    nombre: {
      type: DataTypes.STRING,
    }
  });

  return Lugar;
};

module.exports = lugar;