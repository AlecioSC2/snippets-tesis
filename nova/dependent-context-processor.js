const dependent = {
  contextProcessors: {
    name: 'getFullName',
    categories: 'fullName',
    priority: 50,
    process(executionContext, contentModel) {
      contentModel.fullName =
        contentModel.firstName + ' ' + contentModel.lastName;
    },
  },
};
