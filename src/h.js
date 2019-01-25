module.exports = function h (tag, opts = {}) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag)
  if (tag === 'svg') {
    if (!opts.viewBox) throw Error('svg objects require viewBox')
    if (!opts.height && !opts.width) throw Error('svg requires width or height')
    el.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  }

  for (var key in opts) {
    el.setAttribute(key, opts[key])
  }
  return el
}
