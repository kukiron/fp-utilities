// Compose any number of functions
const compose = (...fns) => result => {
  const list = [...fns]

  while (list.length > 0) {
    // Take the last function off the end of the list & execute it
    result = list.pop()(result)
  }

  return result
}

module.exports = compose
