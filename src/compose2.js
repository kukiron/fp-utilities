// Common purpose composition function for two functions
const compose2 = (fn2, fn1) => originalVal => fn2(fn1(originalVal))

module.exports = compose2
