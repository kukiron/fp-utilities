// Uncurry a previously curried function to it's original state

const uncurry = fn => (...args) => {
  let ret = fn

  for (let arg of args) {
    ret = ret(arg)
  }

  return ret
}

module.exports = uncurry
