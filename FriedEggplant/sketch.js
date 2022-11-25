let NUM_OF_PARTICLES = 3;
let particles = [];

function setup() {
  createCanvas(500, 400);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push( new Particle(random(width), random(height)) );
  }
}

function draw() {
  background(220);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.adjustScale(0.01); // ***
    //p.adjustScale(-0.01); // try a negative value to reduce the scale
    p.display();
  }
}

//

class Particle {
  constructor(x, y) {
    // properties
    this.x = x;
    this.y = y;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-1, 1);
    this.scl = 1.0;
    this.rotAngle = random(-20, 20); // degrees
  }
  // methods
  adjustScale( value ) {
    this.scl += value; 
    this.scl = constrain(this.scl, 0.10, 2.00); // limit the diameter between 10% and 200%
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    translate(this.x, this.y);
    scale(this.scl);
    //rotate( radians(this.rotAngle) ); // uncomment and see the effect
    
    beginShape();
    vertex(0, 0);
    vertex(-10, -8);
    vertex(-12, 8);
    vertex(12, 8);
    vertex(10, -8);
    endShape(CLOSE);
    
    pop();
  }
}