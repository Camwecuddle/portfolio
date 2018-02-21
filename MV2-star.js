function recordClick() {
  var click = 0;
}
console.log("cam");
myCanvas.addEventListener("click", getClickPosition, true);

function getClickPosition(e) {
    console.log("cam");
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    console.log(xPosition + " " + yPosition);
}
