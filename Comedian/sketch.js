let bananas = [];
let yellowBubbles = [];
let blackBubbles = [];
let a = 255;
let t = 0;
let t_now = 0;
let flag = false;

function preload() {
  banana = loadImage("banana.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bananas.push(new Bananas(width / 2 - 50, height / 2 - 50));
  // let button = createButton("reset sketch");
  // button.mousePressed(restart);
}

function draw() {
  background(255);

  for (let i = 0; i < yellowBubbles.length; i++) {
    let y = yellowBubbles[i];
    y.display();
    y.fall();
    y.move();
    y.bounce();
  }
  for (let i = 0; i < bananas.length; i++) {
    let b = bananas[i];
    b.display();
    b.move();
  }
  if(yellowBubbles.length>=1000){
     yellowBubbles.splice(0, 100);
     }
  
  if (flag == true) {
    t_now = millis();
    if (t_now - t >= 4000) {
      t = millis();
      yellowBubbles.splice(0, 10);
      for (let i = 0; i < 2; i++) {
        blackBubbles.push(new blackBubble(random(width), random(height)));
      }
    }

    for (let i = 0; i < blackBubbles.length; i++) {
      let b = blackBubbles[i];
      b.display();
      //b.fall();
      //b.move();
      b.bounce();
      b.grow();
    }
  }
if(blackBubbles.length>=20){
  flag=false;
}
  // t_now = millis();
  // if (t_now - t >= 2000) {
  //   t = millis();
  //   yellowBubbles.splice(0, 10);
  //   for (let i = 0; i < 20; i++) {
  //     blackBubbles.push(new blackBubble(random(width), random(height)));
  //   }
  // }
  for (let i = 0; i < blackBubbles.length; i++) {
    let b = blackBubbles[i];
    b.display();
    //b.fall();
    //b.move();
    b.bounce();
    b.grow();
  }

  push();
  translate(width / 2 - 30, height / 2 - 20);
  rotate(-PI / 4);
  noStroke();
  fill(224, a);
  rect(-10, 20, 30, 160);
  pop();
}

function mouseClicked() {
  flag = true;
  if (
    width / 2 - 75 < mouseX < width / 2 + 25 &&
    height / 2 - 75 < mouseY < height / 2 + 25
  ) {
    a = 0;
    for (let i = 0; i < bananas.length; i++) {
      let b = bananas[i];
      b.display();
      b.move();
      b.fall();
    }
  }
  for (let i = 0; i < 700; i++) {
    yellowBubbles.push(new yellowBubble(random(width), 0));
  }
  for (let i = 0; i < yellowBubbles.length; i++) {
    let y = yellowBubbles[i];
    y.display();
    y.move();
    y.fall();
    y.bounce();
  }
}

class Bananas {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpd = 0;
    this.ySpd = 0;
    this.dia = 150;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  fall() {
    this.ySpd += 7;
  }
  display() {
    image(banana, this.x, this.y, this.dia, this.dia);
  }
  fade() {
    if (this.y >= height - 30) {
      this.dia = 0;
    }
  }
}

class yellowBubble {
  constructor(x, y) {
    // properties
    this.x = x;
    this.y = y;
    this.xSpd = random(-10, 10);
    this.ySpd = random(2, 20);
    this.dia = random(20, 100);
    this.color=0;
    this.cSpd=0.02;
  }
  // methods
  fall() {
    this.ySpd += 0.01;
  }
  bounce() {
    if (this.x < 0) {
      this.x = 0;
      this.xSpd = this.xSpd * -1;
    } else if (this.x > width) {
      this.x = width;
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpd = this.ySpd * -1;
    } else if (this.y > height) {
      this.y = height;
      this.ySpd = this.ySpd * -1;
    }
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    this.color+=this.cSpd;
    strokeWeight(0.1);
    translate(this.x, this.y);
    fill(255-this.color, 255-this.color, random(50));
    circle(0, 0, this.dia);
    pop();
  }
}

class blackBubble {
  constructor(x, y) {
    // properties
    this.x = x;
    this.y = y;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-5, -3);
    this.dia = -100;
    this.r=0;
    this.diaSpd = 0.15;
  }
  fall() {
    this.ySpd += 0.01;
  }
  bounce() {
    if (this.x < 0) {
      this.x = 0;
      this.xSpd = this.xSpd * -1;
    } else if (this.x > width) {
      this.x = width;
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpd = this.ySpd * -1;
    } else if (this.y > height) {
      this.y = height;
      this.ySpd = this.ySpd * -1;
    }
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
   
    push();
  for (var i = 100; i > 0; i-=3) {
      noStroke();
      fill(i,20);
    this.r=this.dia+i;
    if(this.r<=0){
      this.r=0
    }
      circle(this.x, this.y,this.r);
  }
    pop();
  }
  grow() {
    this.dia += this.diaSpd;
  }
}


