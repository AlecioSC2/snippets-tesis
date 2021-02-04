const parentContextProcessor = require('parent-context-processor');
const contextProcessor = parentContextProcessor.extends({
  priority: 50,
  Name: 'Ejemplo',
  Categories: 'prueba',
  process(executionContext, contentModel) {
    contentModel.prueba = 'Esto es una prueba';
  },
});
