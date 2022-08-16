var mode = sessionStorage.getItem("theme", mode) || "dark_mode"
sessionStorage.setItem("theme", mode)
window.onload = getTheme()

function getTheme() {
    document.body.classList.remove("theme", mode)
    var mode = sessionStorage.getItem("theme", mode)
    document.body.classList.add("theme", mode)
    return mode
}

theme = function () {
    document.body.classList.remove("theme", mode)
    if (mode == "light_mode") {
        mode = "dark_mode"
    } else { mode = "light_mode" }
    toggleBtn()
    document.body.classList.add("theme", mode)
    sessionStorage.setItem("theme", mode)
    return mode
}

function toggleBtn() {
    var toggleBtn = document.getElementById('theme')
    if (toggleBtn.innerHTML === "Light Mode") {
        toggleBtn.innerHTML = "Dark Mode";
    }
    else {
        toggleBtn.innerHTML="Light Mode"
        }
    }

let txt = 'Do a custom type.';
let i = 0;
function typewriter() {
    let url = window.location.hash.slice(1) || '/';
    let item = document.getElementById('typed') 
    if (url === 'type') {
        if(!item) {window.setTimeout(typewriter, 150)}
        else
        if (url === 'type') {
            if (i < txt.length) {
                item.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typewriter, 100);
            }
        }
    }
}

function pageReload() {
        let url = window.location.hash.slice(1) || '/';
        (function () { if (url === 'type' || 'boids') { location.reload() } })()

}

let flocks = 3
function makeBoids() {
    let boids_num = Math.random() * 10
    let url = window.location.hash.slice(1) || '/';
    let boids = {}
    if (url == 'boids') {
        for (let i = 0; i < boids_num; i++) { 
            boids[i] = document.createElement('div')
            boids[i].classList.toggle('boids')
          }

    for (i = 0; i < boids_num; i++) {
        console.log(boids[i])
        document.body.appendChild(boids[i])
    }
    for (let i = 0; i < boids_num; i++) {

        let width = visualViewport.width;
        let height = visualViewport.height;
        let r = height * Math.random();

        boids[i].animate( [ { transform: `translateX(${width + r}px)` }, {transform: `translateY(${(height + r)}px)` } ], { duration: (15000 * i) * 0.5 })
        boids[i].animate( [{ transform: 'rotate(30deg)' }], { duration: 18000 } )
        boids[i].animate( [{ transform: `rotate(${-r}deg)` }], { duration: 12000 } )
        }
        for (i = 0; i < flocks; i++) { window.setTimeout(makeBoids, 150); flocks = flocks - 1 }
    }
}


window.addEventListener('hashchange', pageReload)
window.addEventListener('hashchange', typewriter)
window.addEventListener('hashchange', makeBoids)
window.addEventListener('DOMContentLoaded', typewriter)
window.addEventListener('DOMContentLoaded', makeBoids)