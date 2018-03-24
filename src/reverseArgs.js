// Reversing function arguments

const reverseArgs = fn => (...args) => fn(...args.reverse())

module.exports = reverseArgs
