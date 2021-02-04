const server = require('@palecio/nova-server').server;
const pathAwareContextProcessor = require('@palecio/nova-server') // Context Processor especial para Nova Server
  .contextProcessors.pathAware;
// Se define el Context Processor
const helloWorldContextProcessor = pathAwareContextProcessor.extend({
  name: 'Hola Mundo',
  patterns: ['*/hello*'], // Patrón de la URL al que esté Context Processor responderá
  process(executionContext, contentModel) {
    contentModel.helloWorld = 'Hola Mundo';
  },
});
/* Configuración del servidor */
const serverConfig = {
  contextProcessors: [helloWorldContextProcessor], // Lista de Context Processors
};

server.start(serverConfig); // Iniciar Nova Server
