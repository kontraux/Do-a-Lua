var txt = 'Do a custom type.';
var i = 0;

function typewriter() {
  if (i < txt.length) {
    document.getElementById("typed").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, 50);
  }
}

window.setTimeout(typewriter, 1500)