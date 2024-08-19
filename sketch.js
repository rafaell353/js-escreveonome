function setup() {
  createCanvas(600, 400);
 background("red");
}
function draw() {
 
  stroke("purple");
  fill("black");
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
