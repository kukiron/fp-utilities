// Composition with recursion
const recurseCompose = (...fns) => {
  const [fn1, fn2, ...rest] = fns.reverse()

  const composedFn = (...args) => fn2(fn1(...args))

  return rest.length === 0
    ? composedFn
    : recurseCompose(...rest.reverse(), composedFn)
}

module.exports = recurseCompose
