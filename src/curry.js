// Currying function arguments

const curry = (fn, arity = fn.length, nextCurried) =>
  (nextCurried = prevArgs => nextArg => {
    const args = [...prevArgs, nextArg]

    return args.length >= arity ? fn(...args) : nextCurried(args)
  })([])

module.exports = curry
