//importar el error
const FatalError = require('@palecio/nova-core').errors.FatalError;

try {
} catch (error) {
  // lanzar el error
  throw new FatalError('Error!');
}
