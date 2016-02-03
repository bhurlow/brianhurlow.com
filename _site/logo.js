
// start immediately for now
neonangles('logo')

function neonangles(canvasId) {

  var c = document.getElementById(canvasId)
  var ctx = c.getContext('2d')
  c.width = 500
  c.height = 500

  // if we want to see triangles overlap
  var trail = false

  // start 1st pass
  action()

  // change on mouse move
  document.onmousemove = function() {
    action()
  }

  // click toggles trailing 
  c.onclick = function() {
    if (trail) trail = false
      else if (!trail) trail = true
  }

  // main behavior paints triangles then text
  function action() {
    if (!trail) clear()
      triangulate('#31DCB5')
    triangulate('#EA327C')
    ctx.font = "bold 80px sans-serif";
    ctx.textBaseline = "top";
    ctx.beginPath()
    if (!trail) {
      ctx.strokeStyle = 'black'
      ctx.strokeText("B", 200, 200)
    }
    else if (trail) {
      ctx.fillStyle = 'white'
      ctx.fillText("B", 200, 200)
    }
  }

  function clear() {
    ctx.clearRect(0, 0, c.width, c.height)
  }

  function triangulate(color) {
    var origin = { x: rand(c.width), y: rand(c.height) }
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.moveTo(origin.x, origin.y)
    ctx.lineTo( rand(c.width), rand(c.height) )
    ctx.lineTo( rand(c.width), rand(c.height) )
    ctx.lineTo(origin.x, origin.y)
    ctx.stroke()
  }

  function rand(n) {
    return Math.floor(Math.random(n) * n)
  }

} // end neonagles constructor

