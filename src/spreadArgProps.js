// Spreading named argument props of function

const spreadArgProps = (
  fn,
  propOrder = fn
    .toString()
    .replace(
      /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/, // eslint-disable-line no-useless-escape
      "$1$2$3"
    )
    .split(/\s*,\s*/)
    .map(v => v.replace(/[=\s].*$/, ""))
) => argsObj => fn(...propOrder.map(k => argsObj[k]))

module.exports = spreadArgProps
