const lugar = (sequelize, DataTypes) => {
  const Lugar = sequelize.define('lugar', {
    nombre: {
      type: DataTypes.STRING,
    }
  });

  Lugar.associate = models => {
    Lugar.belongsTo(models.Incidente);
  };

  return Lugar;
};

module.exports = lugar;