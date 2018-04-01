// Partially applying the rightmose arguments

const partialRight = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...laterArgs, ...presetArgs)

module.exports = partialRight
