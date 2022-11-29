
  let particles = [];
  let totalNum = 3; // Decide the number of particles here.
  
  function setup() {
    let canvas = createCanvas(1200, 500);
    canvas.parent("canvasContainer");
   
    //  Generate Particles
    for (let i = 0; i < totalNum; i++) {
      particles[i] = new Particle(random(width), random(height));
    }
  }
  
  function draw() {
    background(0);
    //  Particles update and display
    for (let i = 0; i < particles.length; i++) {
      particles[i].display();
      particles[i].move();
      particles[i].shrink();
      particles[i].fall();
     
    }
    if(particles.length>1000){
      particles.splice(0,1);
    }
  }
  
  //  Design interactions by using Mouse or Keyboard
  function mousePressed() {
    //..generate an object when mousePressed at the location of  mouseX,mouseY
    
    for (let i = 0; i < 100; i++) {
       particles.push(new Particle(random(mouseX-10,mouseX+10), random(mouseY-10,mouseY+10)));
     }
  for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.explode();
    
  }
   
  }
  
  //----------------------------------OOP:Class
  class Particle {
    //  Constructor Function:properties
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.dia = random(5,10);
      this.xSpd = 0;
      this.ySpd = 0;
      this.r=252;
      this.g=random(0,252);
      this.b=4;
    }
  
    // methods
    move() {
      this.x += this.xSpd;
      this.y += this.ySpd;
    }
  
    //  Particle's appearance
    
   
    display() {
      push();
      translate(this.x, this.y);
  
     
      noStroke();
      rotate(random(0,PI*2));
      fill(this.r,this.g,this.b);
      ellipse(0, 0, this.dia,this.dia/2);
  
      pop();
      
    }
    
    fall(){
      this.ySpd +=0.1;
    }
    
  
  explode(){
    this.ySpd=random(-4,4);
    this.xSpd=random(-4,4);
  }
   
  shrink(){
    this.dia-=0.1
    this.dia=constrain(this.dia,0,20)
  }
   
  }
  




