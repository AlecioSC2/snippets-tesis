const addNumbers = {
  name: 'Add Numbers',
  priority: 100,
  categories: 'operaciones',
  process(executionContext, contentModel) {
    contentModel.addition = contentModel.num1 + contentModel.num2;
  },
};

const substractNumbers = {
  name: 'Subtract Numbers',
  priority: 100,
  categories: 'operaciones',
  process(executionContext, contentModel) {
    contentModel.subtraction = contentModel.num1 - contentModel.num2;
  },
};

const multiplyNumbers = {
  name: 'Multiply Numbers',
  priority: 90,
  categories: 'operaciones',
  process(executionContext, contentModel) {
    contentModel.result = contentModel.addition * contentModel.subtraction;
  },
};
