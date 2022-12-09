let a=255
let color1=0
let color2=255
let fc=0;
let x=0;
let y=0;
let dia=0;
let spd=0;
function setup() {
  createCanvas(windowWidth,windowHeight);
let dis=mouseX;
}

function draw() {
   fc+=spd;
  let fre = fc * 0.02;
  let amp = map(mouseX,0,width,10,100);
  let noiseValue = noise(fre) * amp; 
  dia=map(mouseX,0,width,5,25);
  spd=map(mouseX,0,width,1,10);
  if(fc>=width){
    fc=0
  }
  y= noise(fc)*amp
  push();
  noStroke();
  fill(color1);
  circle(fc,y+20,dia);
  pop();
  //
  a=map(mouseX,0,width,255,5);
  background(color2,a);
  let dis=mouseX/2+100
translate(width/2,height/3);
  stroke(color1)
  //face
  fill(color2)
  beginShape();
  vertex(-dis+30,-7);
  vertex(-dis+20,-10);
  vertex(-dis+9,-5)
  vertex(-dis,0);
  vertex(-dis-20,20);
  vertex(-dis-30,40);
  vertex(-dis-27,60);
  vertex(-dis-40,80);
  vertex(-dis-60,100);
  vertex(-dis-40,110);
  vertex(-dis-42,120);
  vertex(-dis-30,125);
  vertex(-dis-37,130);
  vertex(-dis-35,140);
  vertex(-dis-39,150);
  vertex(-dis-20,160);
  vertex(-dis-10,160);
  vertex(-dis,155);
  vertex(-dis+3,172);
  vertex(-dis+8,190);
  vertex(-dis+30,180);
  vertex(-dis+40,175);
  vertex(-dis+45,175);
  vertex(-dis+48,175);
  vertex(-dis+55,173);
  vertex(-dis+58,173);
  vertex(-dis+55,140);
  endShape();
   push();
  fill(color1);
  noStroke();
  //hair
  ellipse(-dis+40,65,120,160);
   fill(color2);
  ellipse(-dis+19,69,80,150);
  fill(color1)
    bezier(-dis+30,-7,-dis+20,-10,-dis+10,+30,-dis-20,20);
    bezier(-dis+30,-7,-dis+20,-10,-dis+10,-30,-dis-20,20);
   pop();
  //RightFace
    fill(color2)
  beginShape();
  vertex(dis-30,-7);
  vertex(dis-20,-10);
  vertex(dis-9,-5)
  vertex(dis,0);
  vertex(dis+20,20);
  vertex(dis+30,40);
  vertex(dis+27,60);
  vertex(dis+40,80);
  vertex(dis+60,100);
  vertex(dis+40,110);
  vertex(dis+42,120);
  vertex(dis+30,125);
  vertex(dis+37,130);
  vertex(dis+35,140);
  vertex(dis+39,150);
  vertex(dis+20,160);
  vertex(dis+10,160);
  vertex(dis,155);
  vertex(dis-3,172);
  vertex(dis-8,190);
  vertex(dis-30,180);
  vertex(dis-40,175);
  vertex(dis-45,175);
  vertex(dis-48,175);
  vertex(dis-55,173);
  vertex(dis-58,173);
  vertex(dis-55,140);
endShape();
  
  push();
  fill(color1);
  noStroke();
  ellipse(dis-40,65,120,160);
   fill(color2);
  ellipse(dis-19,69,80,150);
  fill(color1)
    bezier(dis-30,-7,dis-20,-10,dis-10,+30,dis+20,20);
    bezier(dis-30,-7,dis-20,-10,dis-10,-30,dis+20,20);
  // ellipse(-dis+45,60,110,160);
   pop();
  fill(color1);
 // ellipse(dis-25,240,100,100)
  
  //rightClothes
  beginShape();
  vertex(dis+15,height);
  vertex(dis+10,270)
  vertex(dis+9,260);
  vertex(dis,200);
  vertex(dis-8,190);
  vertex(dis-30,180);
  vertex(dis-40,175);
  vertex(dis-45,175);
  vertex(dis-48,175);
  vertex(dis-55,173);
  vertex(dis-58,173);
  vertex(dis-78,200);
  vertex(dis-88,230);
  vertex(dis-98,293);
  vertex(dis-100,height);
  endShape();
  //leftClothes
  beginShape();
  vertex(-dis-15,height);
  vertex(-dis-10,270)
  vertex(-dis-9,260);
  vertex(-dis,200);
  vertex(-dis+8,190);
  vertex(-dis+30,180);
  vertex(-dis+40,175);
  vertex(-dis+45,175);
  vertex(-dis+48,175);
  vertex(-dis+55,173);
  vertex(-dis+58,173);
  vertex(-dis+78,200);
  vertex(-dis+88,230);
  vertex(-dis+98,293);
  vertex(-dis+100,height);
  endShape();
  //Hair
  rectMode(CENTER);
  fill(color1);
  rect(0,55,mouseX/15,30-mouseX/15);
  ellipse(mouseX/10,55,mouseX/15,35-mouseX/15);
  ellipse(-mouseX/10,55,mouseX/15,35-mouseX/15);
  rect(mouseX*2/10,55,mouseX/10,25-mouseX/25);
  rect(-mouseX*2/10,55,mouseX/10,25-mouseX/25);
  ellipse(mouseX*3/10,55,mouseX/14,30-mouseX/20);
  ellipse(-mouseX*3/10,55,mouseX/14,30-mouseX/20);
  rect(mouseX*4/10,55,mouseX/10,30-mouseX/16);
  rect(-mouseX*4/10,55,mouseX/10,30-mouseX/16);
  ellipse(mouseX*5/10,55,mouseX/14,40-mouseX/16);
  ellipse(-mouseX*5/10,55,mouseX/14,40-mouseX/16);
  }
function mouseClicked(){
  if(color1==0){
    color1=255;
    color2=0
  }else if(color1==255){
    color1=0;
    color2=255
  }
}