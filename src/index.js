const h = require('./h')

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
