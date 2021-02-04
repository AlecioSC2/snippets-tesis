const independent = {
  contextProcessors: {
    name: 'HelloWorld',
    categories: 'hw',
    process(executionContext, contentModel) {
      contentModel.greeting = 'Hello World';
    },
  },
};
