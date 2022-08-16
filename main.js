// Theme start
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
        (function () { if (url === 'type') { location.reload() } })()
}

window.addEventListener('hashchange', pageReload)
window.addEventListener('hashchange', typewriter)
window.addEventListener('DOMContentLoaded', typewriter)