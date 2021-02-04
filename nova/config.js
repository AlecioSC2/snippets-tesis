const contextProcessor = {
  priority: 50,
  config: {
    lang: 'en',
  },
  name: 'Ejemplo',
  categories: 'prueba',
  process(executionContext, contentModel) {
    const lang = executionContext.config.lang;
    contentModel.translatedText = translate(contentModel.text, lang);
  },
};
