function process(executionContext, contentModel) {
  return setTimeoutPromise(100).then(() => {
    contentModel.helloWorld = 'Hello World';
  });
}
