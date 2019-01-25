module.exports = function hexGrid ({ cx = 0, cy = 0, rings, r }) {
  if (!Number.isInteger(rings)) throw Error('hexGrid expects integer number of rings')

  const verticesPrototype = [
    [0, 2 * r],
    [Math.sqrt(3) * r, r],
    [Math.sqrt(3) * r, -r],
    [0, -2 * r],
    [-Math.sqrt(3) * r, -r],
    [-Math.sqrt(3) * r, r]
  ]

  var results = [[0, 0]]

  for (var ring = 1; ring <= rings; ring++) {
    // get the vertices of the ring
    const vertices = verticesPrototype.map(vec => vecScale(vec, ring))

    var points = []
    vertices.forEach((_, j) => {
      var start = vertices[j]
      var end = vertices[j + 1] || vertices[0] // loop for last vertex!

      var step = vecScale(vecSub(end, start), 1 / ring)

      for (var k = 0; k < ring; k++) {
        points.push(vecAdd(start, vecScale(step, k)))
      }
    })

    results = [...results, ...points]
  }

  // translate all coords by (cx, cy)
  results.map(coord => [coord[0] + cx, coord[1] + cy])

  return results
}

function vecScale (a, k) {
  return [k * a[0], k * a[1]]
}

function vecAdd (a, b) {
  return [a[0] + b[0], a[1] + b[1]]
}

function vecSub (a, b) {
  return vecAdd(a, vecScale(b, -1))
}
