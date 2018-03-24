// Curry Named Arguments

const curryProps = (fn, arity = 1, nextCurried) =>
  (nextCurried = prevArgsObj => (nextArgObj = {}) => {
    const [key] = Object.keys(nextArgObj)
    const allArgsObj = Object.assign({}, prevArgsObj, {
      [key]: nextArgObj[key]
    })

    return Object.keys(allArgsObj).length >= arity
      ? fn(allArgsObj)
      : nextCurried(allArgsObj)
  })({})

module.exports = curryProps
