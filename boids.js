document.onload = window.setTimeout(boids, 5000)
function boids() {
    var boids = document.getElementsByClassName('boids')
    var canvas = document.getElementById('canvas')
    for (let i = 0; i < boids.length; i++) {
        let r = 200 * Math.random();
        var w = window.innerWidth;
        var h = window.innerHeight;
        boids[i].animate( [ { transform: `translateX(${w / 1.5 + r}px)` }, {transform: `translateY(${h}px)` } ], { duration: 4500 + r })
        canvas.animate( [{ transform: 'rotate(80deg)' }], { duration: 5500 } )
    }
}


