// Partially applying named arguments

const partialProps = (fn, initialArgsObj) => laterArgsObj =>
  fn(Object.assign({}, initialArgsObj, laterArgsObj))

module.exports = partialProps
