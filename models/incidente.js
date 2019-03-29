const incidente = (sequelize, DataTypes) => {
  const Incidente = sequelize.define('incidente', {
    mensaje: {
      type: DataTypes.STRING,
    },
    lugarsid: {
      type: DataTypes.INTEGER
    },
    tiposid: {
      type: DataTypes.INTEGER
    }
  });

  Incidente.asossiate = models => {
    Incidente.hasOne(models.Lugar);
    Incidente.hasOne(models.Sitio);
  }

  return Incidente;
};

module.exports = incidente;