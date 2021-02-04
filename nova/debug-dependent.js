const debug = {
  dependent: [
    {
      contentModel: {
        // el Content Model que ingresó a los Context Processors
        test: 'Hello World',
      },
      priority: 100, // la prioridad de la agrupación Context Processors
      // un arreglo con los nombres de los ContextProcessors
      contextProcessors: ['TestDependentContextProcessor'],
    },
  ],
};
