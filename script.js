let x,y;
let px,py;
let step = 1;
let stepSize = 10;
let numSteps = 1;
let state = 0;
let turnCounter = 0;
let totalSteps;

function setup() {
    createCanvas(500,500);
  
    textFont("Courier")
  
    const c = width/stepSize;
    const r = height/stepSize;
    totalSteps = c*r;
    
    x = width / 2;
    y = height / 2;
    px = x;
    py = y;
    background(0);
}

function isPrime(value){
  if(value == 1) return false;
  for(let i = 2; i< value/2; i++){
    if(value % i == 0){
      return false;
    }
  }
  return true;
}

function draw(){

    // textSize(stepSize);
    // textAlign(CENTER,CENTER);
    fill(255);
    stroke(255);
    rectMode(CENTER);
    if(isPrime(step)){
      circle(x, y, stepSize*0.5);
    }
    
    line(px, py, x, y)
    px = x;
    py = y;
    
    switch(state){
      case 0:
        x+= stepSize;
        break;
      case 1:
        y-= stepSize;
        break;
      case 2:
        x-= stepSize;
        break;
      case 3:
        y+= stepSize;
        break;
        
        
    }
    
    
    if(step % numSteps == 0){
      state = (state + 1)%4;
      turnCounter++;
      if(turnCounter%2 == 0){
        numSteps++;
      }
    }
  
  step++;
  if(step > totalSteps){
    noLoop();
  }
  
}