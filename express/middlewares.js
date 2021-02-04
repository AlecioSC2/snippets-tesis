app.use('/ejemplo', function (request, response, next) {
  console.log('Ejecutando el primer middleware');
  next();
});

app.use('/ejemplo', function (request, response) {
  console.log('Ejecutando el segundo middleware');
  response.send('Hola Mundo!');
});
