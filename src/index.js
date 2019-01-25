const svg = h('svg', {
  viewBox: '0 0 200 100',
  width: '200px'
})
document.body.appendChild(svg)

const circle = h('circle', {
  cx: 40,
  cy: 40,
  r: 20,
  fill: 'rgb(255, 0, 0)'
})
svg.appendChild(circle)

// oscillate the color!
var x = 0
const step = Math.PI / 30
const amplitude = 200 // max 255
setInterval(() => {
  x += step
  var g = amplitude / 2 * Math.sin(x) + amplitude / 2
  circle.setAttribute('fill', `rgb(255, 0, ${g}`)
}, 20)

// helper

function h (tag, opts = {}) {
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
