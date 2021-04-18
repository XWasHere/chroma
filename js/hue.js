"use strict";

const hueInterval = ParseInt(URLSearchParams.get("delay"),10) || 0
let rat = document.getElementById("rat");
let hue = 0;

function updateRat() {
  rat.style.filter = `hue-rotate(${hue}deg)`;
  rat.style["-webkit-filter"] = `hue-rotate(${hue}deg)`;
}

function doColor() {
  hue += 1 //getRandomInt(-1 * hueMaxChange, 1 * hueMaxChange);
  if (hue > 360) {
    hue -= 360;
  }
  else if (hue < 0) {
    hue += 360;
  }
  updateRat();
}

rat.onclick = (function() {
  setInterval(doColor, hueInterval);
});
