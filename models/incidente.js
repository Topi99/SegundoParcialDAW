const incidente = (sequelize, DataTypes) => {
  const Incidente = sequelize.define('incidente', {
    mensaje: {
      type: DataTypes.STRING,
    }
  });

  Incidente.asossiate = models => {
    Incidente.hasOne(models.Lugar);
    Incidente.hasOne(models.Sitio);
  }

  return Incidente;
};

module.exports = incidente;