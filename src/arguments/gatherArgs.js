// Gather the spreaded out input arguments at the call-site & use them as an array

const gatherArgs = fn => (...argsArr) => fn(argsArr)

module.exports = gatherArgs
