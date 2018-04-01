// Composition from left-to-right with pipe function

const pipe = (...fns) => result => {
  const list = [...fns]

  while (list.length > 0) {
    result = list.shift()(result)
  }

  return result
}

// Simpler implementation
// const pipe = (...fns) => x => fns.reduce((prev, func) => func(prev), x)

// Even simpler implementation - using other utility functions
// const pipe = reverseArgs(compose)

module.exports = pipe
