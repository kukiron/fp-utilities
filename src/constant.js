// Returning without changing the value/input
// Just wrapping the function in question with another function - FP Style!!

const constant = val => () => val

module.exports = constant
