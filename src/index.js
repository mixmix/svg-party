const h = require('./h')
const hexGrid = require('./hex-grid')

const svg = h('svg', {
  viewBox: '-200 -200 400 400',
  width: '800px'
})
document.body.appendChild(svg)

const grid = hexGrid({ rings: 4, r: 10 })

grid.forEach(coord => {
  svg.appendChild(
    h('circle', {
      cx: coord[0],
      cy: coord[1],
      r: 8,
      fill: 'rgb(255, 0, 0)'
    })
  )
})

// oscillate the color!
// var x = 0
// const step = Math.PI / 30
// const amplitude = 200 // max 255
// setInterval(() => {
//   x += step
//   var g = amplitude / 2 * Math.sin(x) + amplitude / 2
//   circle.setAttribute('fill', `rgb(255, 0, ${g}`)
// }, 20)
