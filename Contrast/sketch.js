var tile2;

function preload() {
  //tile2 = loadImage("tile22-02.png");
  //tile2 = loadImage("tile10-08.png");
  //tile2 = loadImage("tile_bk_-03.png");
  tile2 = loadImage("tile_b&w-01.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  var radius = width * 1.5;
  orbitControl();

  normalMaterial();
  texture(tile2);
  translate(0, 0, mouseX);
  for (var i = 0; i <= 12; i++) {
    for (var j = 0; j <= 12; j++) {
      push();
      var a = j / 12 * PI;
      var b = i / 12 * PI;
      translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2, cos(2 * a) * radius * sin(b));
      if (j % 2 === 0) {
        //cone(30, 30);
        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        //torus(900, 60);
        //ellipsoid(900,9000,20);
        ellipsoid(700, 700, 700);
        //ellipsoid(900,900,90);
        pop();
      }
      pop();
    }
  }
}