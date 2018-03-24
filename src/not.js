// Negation helper - providing the function with opposite functionality

const not = fn => (...args) => !fn(...args)

module.exports = not
