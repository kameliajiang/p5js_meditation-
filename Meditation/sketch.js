var x = 0;
var y = 0;
var oink;
var angle = 0;
var diameter;
var carrier;
var modulator;


var carrierBaseFreq = 220;


var modMaxFreq = 112;
var modMinFreq = 0;
var modMaxDepth = 150;
var modMinDepth = -150;


function preload() {
  oink = loadSound("oink.wav");
}


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  diameter = height - 10;

  carrier = new p5.Oscillator('sine');
  carrier.amp(0);
  carrier.freq(carrierBaseFreq);
  carrier.start();

  // 'square', 'sine', 'sawtooth' or 'triangle'
  modulator = new p5.Oscillator('sawtooth');
  modulator.start();
  modulator.disconnect();
  carrier.freq(modulator);
  toggleAudio(cnv);
}


function draw() {
  background(0);
  strokeWeight(11);
  stroke(255);
  var d2 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;

  var x = 0;
  while (x <= width) {
    ellipse(x-9.9, touchY, random(10), touchX);
   //triangle(x, touchY, random (10), touchX, touchX, touchX);
    x = x + d2 + 2;

  }
  if (mouseIsPressed) {
    oink.playbackRate = map(mouseX, 0, width, 0, 5)
    oink.play()
  }
  if (frameCount % 100) {
    var modFreq = map(mouseY, height, 0, modMinFreq, modMaxFreq);
    modulator.freq(modFreq);

    var modDepth = map(mouseX, 0, width, modMinDepth, modMaxDepth);
    modulator.amp(modDepth);
  }
  angle += 0.016;
}


function toggleAudio(cnv) {
  cnv.mouseOver(function() {
    carrier.amp(1.0, 0.01);
  });
  cnv.touchStarted(function() {
    carrier.amp(1.0, 0.01);
  });
  cnv.mouseOut(function() {
    carrier.amp(0.0, 1.0);
  });
}