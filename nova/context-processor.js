const contextProcessor = {
  priority: 50,
  config: {
    miPropiedad: 'Mi Valor',
  },
  name: 'Ejemplo',
  categories: 'prueba',
  process(executionContext, contentModel) {
    contentModel.prueba = 'Esto es una prueba';
  },
};
