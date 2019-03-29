# README

## Modelos

Los modelos de la base de datos (la definición de las tablas) se encuentran en /models, cada uno en su archivo.

## Controladores

Los controladores se encuentran en el archivo /routes/index.js
Cada ruta representa un controlador que maneja peticiones, ya sean POST o GET.

## Stored Procedures

Mi motor de base de datos no soporta Stored Procedures, tiene algo parecido, Functions, pero no servían para el propósito que se le tenía que dar a los Stored Procedures. 

En el archivo /routes/index.js simulo el stored procedure con 

```javascript
const [incidentes, tipos, lugares] = await Promise.all([Incidente.findAll(), Tipo.findAll(), Lugar.findAll()]);
incidentes.map(inc => {
  tipo = tipos.find(check.bind(this, inc.tiposid));
  lugar = lugares.find(check.bind(this, inc.lugarsid));

  inc.lugarsid = lugar.nombre;
  inc.tiposid = tipo.nombre;

  return inc;
});
```
Con lo siguiente ejecuto las 3 querys de manera asíncrona, para evitar tiempos de espera muy largos
```javascript
const [incidentes, tipos, lugares] = await Promise.all([Incidente.findAll(), Tipo.findAll(), Lugar.findAll()]);
```

Después, con `incidentes.map()` busco el id del tipo y lugar de incidente y los reemplazo con su nombre equivalente.
