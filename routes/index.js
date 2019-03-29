const express    = require('express');
const router     = express.Router();
const Lugar      = require('../models/index').models.Lugar
const Tipo       = require('../models/index').models.Tipo;
const Incidente  = require('../models/index').models.Incidente;
const sequelize  = require('../models/index').sequelize;

/* GET home page */
router.get('/', async (req, res, next) => {
  // Tipo.create({nombre:'Falla eléctrica'});
  // Tipo.create({nombre:'Fuga de herbívoro'});
  // Tipo.create({nombre:'Fuga de Velociraptors'});
  // Tipo.create({nombre:'Fuga de TRex'});
  // Tipo.create({nombre:'Robo de ADN'});
  // Tipo.create({nombre:'Auto descompuesto'});
  // Tipo.create({nombre:'Visitantes en zona no autorizada'});
  const tipos = await Tipo.findAll();
  const lugares = await Lugar.findAll();
  res.render('index', { tipos, lugares });
  // res.render('index');
});

router.post('/', async (req, res) => {
  if(req.body.mensaje) {
    try {
      await Incidente.create({ mensaje: req.body.mensaje, lugarsid: req.body.lugar, tiposid: req.body.tipo });

      console.log(req.body.lugar)
      res.redirect('/incidentes');
    } catch { e => { 
        res.render('error', {error: e});
      } 
    }

    return;
  }

  res.render('error', {error: 'Por favor, ingresa todos los datos'});
})

const check = (id, element) => {
  return element.id === id;
}

router.get('/incidentes', async (req, res) => {
  const [incidentes, tipos, lugares] = await Promise.all([Incidente.findAll(), Tipo.findAll(), Lugar.findAll()]);
  // incs = [];
  incidentes.map(inc => {
    tipo = tipos.find(check.bind(this, inc.tiposid));
    lugar = lugares.find(check.bind(this, inc.lugarsid));

    inc.lugarsid = lugar.nombre;
    inc.tiposid = tipo.nombre;

    return inc;
  });
  console.log(incidentes);
  res.render('incidentes', { incidentes });
  // res.json({ incidentes, tipos, lugares })
});

module.exports = router;
