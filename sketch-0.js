var cellSize = 200;
var cellSizeMax = 400;
var cellSizeMin = 50;

var cellOffset = 80;
var cellOffsetMax = 100;

var rotation = 0.1;
var rotationMax = 2.0;
var rotationMin = 0.0;
var rotationStep = 0.001;

var sizeSubtract = 10;
var sizeSubtractMin = 2;
var sizeSubtractStep = 0.01;
var sizeSubtractMax = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  const gui = createGui('p5.gui');
  gui.addGlobals('cellSize', 'cellOffset', 'rotation', 'sizeSubtract');
  noLoop();
}

function draw() {
  background(255);
  noStroke();
  strokeWeight(2);

  rectMode(CENTER);
  for (let x = cellSize/2+cellOffset; x < width; x+=cellSize+cellOffset) {
    for (let y = cellSize/2+cellOffset; y < height; y+=cellSize+cellOffset) {
      push();
      translate(x,y);
      drawRecursive(x, y, cellSize);
      pop();
    }
  }
}

function drawRecursive(x, y, size) {
  if (size < 10) {
    return;
  }
  stroke(20);
  square(0,0, size);
  rotate(rotation+random(0.04));

  drawRecursive(x, y, size-sizeSubtract);
}
