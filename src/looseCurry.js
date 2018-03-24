// Applying both currying & partial application with the following function
// Partially applying is ocasionally more performant that currying for fewer function calls

const looseCurry = (fn, arity = fn.length, nextCurried) =>
  (nextCurried = prevArgs => (...nextArgs) => {
    const args = [...prevArgs, ...nextArgs]

    return args.length >= arity ? fn(...args) : nextCurried(args)
  })([])

module.exports = looseCurry
