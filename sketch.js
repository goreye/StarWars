////                                                        Variables 
var x = 0;
var y = 0;
var fr = 20;
var array1 = [-1, 1]
var music;
var k = 255;
var l = 255;
var m = 255;
var t = 10;
var nums1 = [100, 70, 20]
var nums2 = [50, 40, 30]
var nums3 = [50, 100, 200, 250, 300]

////                                                       **Preloads**
function preload() {
  music = loadSound('Star Wars.mp3');
  //img = loadImage('Death Star.jpg')
}
////                                                        **Setup**
function setup() {
  createCanvas(1430, 750, WEBGL);
  frameRate(fr);
  //                                                       Reverb/Decay
  reverb = new p5.Reverb();
  music.disconnect();
  reverb.process(music, 3, 10);

}

////                                                        **Draw**
function draw() {
  background(0);
  noStroke();
  ///                                                      Background

  if (keyIsPressed && keyCode === 32) {
    l = random(100);
    m = random(100);
    n = random(100);
    background(l, m, n);
  }



  ///                                                         Moon

  noFill();
  noStroke();
  push();
  translate(-100, -100);
  sphere(100);
  pop();

  ///                                                        Spheres


  //Sphere 1
  noFill();
  noStroke();
  push();
  translate(-550, 20);
  sphere(8);
  pop();

  //Sphere 2
  noFill();
  noStroke();
  push();
  translate(100, -200);
  sphere(5);
  pop();

  //Sphere 3
  noFill();
  noStroke();
  push();
  translate(500, 250);
  sphere(20);
  pop();

  ///                                                   Rotating Ellipsoids

  //Ellipsoide 1
  
  for(var q = 0; q<3; q++) {
  push();
  translate(-550, 20);
  rotateX(frameCount * nums1[q]*0.0017);
  rotateY(frameCount * nums1[q]*0.0017);
  torus(nums1[q], 5);
  pop();
  }
  

  //Ellipsoide 2
  //E2A
  
  for(var p = 0; p<3; p++) {
  push();
  translate(100, -200);
  rotateX(frameCount * nums2[p]*0.003);
  rotateY(frameCount * nums2[p]*0.003);
  torus(nums2[p], 2);
  pop();
  }

  //Ellipsoide 3
  //E3A
  
  for(var e = 0; e<5; e++) {
  push();
  translate(500, 250);
  rotateX(frameCount * nums3[e]*0.001);
  rotateY(frameCount * nums3[e]*0.001);
  torus(nums3[e], 6);
  pop();
  }

  ////                                      Starry Background and Directional Lighting

  t = random(10);
  
  for (var i = 0; i < 100; i++) {
    x = random(1200);
    y = random(700);
    a = random(array1);
    b = random(array1);
    push();
    translate(x * a, y * b);
    fill(255);
    var dirY = (mouseY / height - 0.5) * 2;
    var dirX = (mouseX / width - 0.5) * 2;
    directionalLight(250, 250, 250, dirX, -dirY, 0.25);
    ambientMaterial(250);
    sphere(t);
    pop();
  }
  

}
  


////                                                       **Sound**
//                                                       Play and Stop
function keyTyped() {
  if (key === 'p') {
    music.play();
  }
  if (key === 's') {
    music.stop();
  }
}



////Notes for future improvement
//1. Text is not enabled in WEBLG, find site which may answer how to debug
//2. Figure out how shading with Color Works in 3D, "light();" function will not work in this sketch
//3. Edit html files (DOM) in future to create functions such as PImage, which can then automatically map 2D texture to 3D shapes