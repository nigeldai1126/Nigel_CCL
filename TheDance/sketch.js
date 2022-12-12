let r1,g1,b1,r2,b2,g2,r3,g3,b3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  iSlider = createSlider(0, 255, 150);
  iSlider.position(20, 20);
  iSlider.addClass("mySliders");
  iiSlider = createSlider(0, 255, 243);
  iiSlider.position(20, 50);
  iiSlider.addClass("mySliders");
  iiiSlider = createSlider(0, 255, 255);
  iiiSlider.position(20, 80);
  iiiSlider.addClass("mySliders");
  angle = 0;
  angleVel = 0.01; 
  radDist = 150; 
  dia = 30;
  button = createButton('Save My Dance');
  button.mousePressed(saveImage);
  button.position(20,100)
  button.addClass("button")
}

function draw() {
   angle = angle + angleVel;

  
  
  // let midX=width/2;
  // let midY=height/2;
  let x1,y1,x2,y2,x3,y3,x4,y4,x5,y5;
  
  // calculate the position
  x1 = width/2 + (cos(angle) * radDist)*1.8;
  y1 = height/2 + sin(angle) * radDist;
  x2 = width/2 + (cos(angle+PI*0.4) * radDist)*1.8;
  y2 = height/2 + sin(angle+PI*0.4) * radDist;
  x3 = width/2 + (cos(angle+PI*0.8) * radDist)*1.8;
  y3 = height/2 + sin(angle+PI*0.8) * radDist;
  x4 = width/2 + (cos(angle+PI*1.2) * radDist)*1.8;
  y4 = height/2 + sin(angle+PI*1.2) * radDist;
  x5 = width/2 + (cos(angle+PI*1.6) * radDist)*1.8;
  y5 = height/2 + sin(angle+PI*1.6) * radDist;
  
  //Background
  const r2 = 255-iiSlider.value();
  const g2 = 255-iiSlider.value();
  const b2 = iiSlider.value();
  background(r2,g2,b2);
  noStroke();
  //grass
  const r1 = 200-iSlider.value();
  const g1 = iSlider.value();
  const b1 = 255-iSlider.value();
  fill(r1,g1,b1);
  circle(width/2,height+100,600)
  circle(width/2+400,height,400)
  circle(width/2-300,height+100,400)
  circle(width/2-500,height,300)
  circle(width/2+600,height,300)
  //people
 
  const r3 = iiiSlider.value();
  const g3 = iiiSlider.value()-170;
  const b3 = (255-iiiSlider.value())*0.2;
  fill(r3,g3,b3);
  // circle(midX,midY-100,50);
  circle(x1,y1,50);
  triangle(x1,y1+220,x1-15,y1,x1+15,y1);
  triangle(x1,y1+20,x1,y1+50,x1-150,y1+60);
  triangle(x1,y1+20,x1,y1+50,x1+150,y1+60);
  circle(x2,y2,50);
  triangle(x2,y2+220,x2-15,y2,x2+15,y2);
  triangle(x2,y2+20,x2,y2+50,x2-150,y2+60);
  triangle(x2,y2+20,x2,y2+50,x2+150,y2+60);
  circle(x3,y3,50);
  triangle(x3,y3+220,x3-15,y3,x3+15,y3);
  triangle(x3,y3+20,x3,y3+50,x3-150,y3+60);
  triangle(x3,y3+20,x3,y3+50,x3+150,y3+60);
  circle(x4,y4,50);
  triangle(x4,y4+220,x4-15,y4,x4+15,y4);
  triangle(x4,y4+20,x4,y4+50,x4-150,y4+60);
  triangle(x4,y4+20,x4,y4+50,x4+150,y4+60);
  circle(x5,y5,50);
  triangle(x5,y5+220,x5-15,y5,x5+15,y5);
  triangle(x5,y5+20,x5,y5+50,x5-150,y5+60);
  triangle(x5,y5+20,x5,y5+50,x5+150,y5+60);

}

function saveImage(){
    save("myTheDance.png");
}