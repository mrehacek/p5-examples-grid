var cellSize = 200;
var cellSizeMax = 400;
var cellSizeMin = 50;

var cellOffset = 80;
var cellOffsetMax = 100;

var rotation = 0.1;
var rotationMax = 2.0;
var rotationMin = 0.0;
var rotationStep = 0.001;

var rotationOuter = 0.1;
var rotationOuterStep=0.001;
var rotationOuterMax = Math.PI/2;

var sizeChange = -10;
var sizeChangeMin = -50;
var sizeChangeStep = 0.1;
var sizeChangeMax = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  const gui = createGui('p5.gui');
  gui.addGlobals('cellSize', 'cellOffset', 'rotation', 'sizeChange', 'rotationOuter');
  noLoop();
}

function draw() {
  background(20);
  fill(0,0,0,50);
  noStroke();
  strokeWeight(3);
  //rotation = map(mouseX, 0, width, rotationMin, rotationMax);
  //sizeChange = map(mouseY, 0, height, sizeChangeMax, sizeChangeMin);

  rectMode(CENTER);
  for (let x = -cellSize/1.5+cellOffset; x < width + cellSize/1.5; x+=cellSize+cellOffset) {
    for (let y = -cellSize/1.5+cellOffset; y < height + cellSize/1.5; y+=cellSize+cellOffset) {
      push();
      translate(x,y);
      rotate(rotationOuter);
      drawRecursive(x, y, cellSize);
      pop();
    }
  }
}

function drawRecursive(x, y, size) {
  if (size < 10 || (size < 30 && random(100) < 30) || (sizeChange > 0 && size > 500)) {
    return;
  }
  stroke(map(noise(x/200,y/200), 0, 1, 0, 40), 100, 100);
  
  square(0,0, size);
  rotate(rotation+ map(noise(x/200,y/200), 0, 1, -0.05, 0.05));

  drawRecursive(x, y, size+sizeChange+ map(noise(x/20,y/20), 0, 1, -2, 2));
}
