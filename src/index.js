const h = require('./h')
const hexGrid = require('./hex-grid')

document.body.style.setProperty('margin', 0)

const svg = h('svg', {
  viewBox: '-300 -200 600 400',
  height: '100vh'
})
svg.style.setProperty('width', '100%')
svg.style.setProperty('max-height', '100vh')
document.body.appendChild(svg)

const dotRadius = 6
const points = hexGrid({ rings: 30, r: dotRadius })
  .filter(vec => {
    return vec[0] - dotRadius > -300 && vec[0] + dotRadius < 300 &&
    vec[1] - dotRadius > -200 && vec[1] + dotRadius < 200
  })

const circles = points.map(vec => {
  return h('circle', {
    cx: vec[0],
    cy: vec[1],
    r: dotRadius - 1,
    // fill: 'rgb(255, 100, 255)',
    fill: 'rgb(0,0,0)',
    'data-dist': vecDist(vec)
  })
})

circles.forEach(circle => svg.appendChild(circle))

var t = 0
const step = 1

setInterval(() => {
  circles.forEach(circle => {
    const dist = Number(circle.dataset.dist)
    const wavelength = 80
    const min = 2
    const amplitude = dotRadius - 1 - min
    const shortWave = amplitude * (Math.cos((2 * Math.PI) / wavelength * (dist - t)) + 1) / 2 + min
    // const shortWave = 1
    const longWave = (Math.cos((2 * Math.PI) / 600 * dist) + 1) / 2
    // const longWave = 1
    const r = shortWave * longWave
    circle.setAttribute('r', r)
  })
  t = t + step
}, 60)

function vecDist (a, b = [0, 0]) {
  return Math.sqrt(
    (a[0] - b[0]) * (a[0] - b[0]) +
    (a[1] - b[1]) * (a[1] - b[1])
  )
}

// oscillate the color!
// var x = 0
// const step = Math.PI / 30
// const amplitude = 200 // max 255
// setInterval(() => {
//   x += step
//   var g = amplitude / 2 * Math.sin(x) + amplitude / 2
//   circle.setAttribute('fill', `rgb(255, 0, ${g}`)
// }, 20)
