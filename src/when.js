// Similar to "not" but checking for the conditional if to execute the other function

const when = (predicate, fn) => (...args) =>
  predicate(...args) ? fn(...args) : undefined

module.exports = when
