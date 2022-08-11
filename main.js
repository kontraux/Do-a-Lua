var mode = sessionStorage.getItem("theme", mode) || "dark_mode"
window.onload = get_theme()

function get_theme() {
    document.body.classList.remove("theme", mode)
    var mode = sessionStorage.getItem("theme", mode)
    document.body.classList.add("theme", mode)
    return mode
}

theme.onclick = function () {
    document.body.classList.remove("theme", mode)
    if (mode === "light_mode") {
        mode = "dark_mode"
    } else { mode = "light_mode"}
    document.body.classList.add("theme", mode)
    sessionStorage.setItem("theme", mode)
    return mode
}
