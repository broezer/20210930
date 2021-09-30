function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  var w = width * 2;
  var h = height * 2;
  
  translate(-w/2, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('green');
    triangle(0 - ((w/w)*i*2), h = ((w/w)*i), w/10, 0, w, h - ((h/h/6)*i));
    
    
  }
  
  translate(w/200, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('blue');
    triangle(0 - ((w/w)*i*2), h = ((w/w)*i), w/10, 0, w, h - ((h/h/6)*i));


  }
  
  translate(-w/100, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('red');
    triangle(0 - ((w/w)*i*2), h = ((w/w)*i), w/10, 0, w, h - ((h/h/6)*i));

  }
  
  noLoop();
  
  save("20210930.png");
  
}
