// Partially applying arguments

const partial = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs)

module.exports = partial
