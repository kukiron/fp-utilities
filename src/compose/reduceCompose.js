// Composing with reduce
const reduceCompose = (...fns) => result =>
  [...fns].reverse().reduce((res, fn) => fn(res), result)

// reduceCompose for passing multiple to first function call
const reduceComposeWithMultArgument = (...fns) =>
  fns.reverse().reduce((fn1, fn2) => (...args) => fn2(fn1(...args)))

module.exports = { reduceCompose, reduceComposeWithMultArgument }
