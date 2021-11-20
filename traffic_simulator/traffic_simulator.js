function setup() {
  createCanvas(windowWidth,windowHeight);
}

blinkervar = 0;
carx = 400;

function drawcar(x,y,direction,clr,blinker){
  let changerx = x-400;
  let changery = y-300;
  
  if (direction == 'right'){
    fill(0);
    rect(400+changerx,300+changery,66,25);
    
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(0,255,255);}
    rect(410+changerx,308+changery,40,10);
    rect(460+changerx,300+changery,20,25);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,410+changerx,308+changery);
    line(400+changerx,325+changery,410+changerx,318+changery);
    line(460+changerx,300+changery,450+changerx,308+changery);
    line(460+changerx,325+changery,450+changerx,318+changery);
    
    if (blinkervar < 30 && blinker == 'right'){
      fill(255,200,0);
      ellipse(400+changerx,300+changery,5,5);
      ellipse(475+changerx,300+changery,5,5);
    } else if (blinkervar < 30 && blinker == 'left'){
      fill(255,200,0);
      ellipse(400+changerx,325+changery,5,5);
      ellipse(475+changerx,325+changery,5,5);
    }
    
  } else if (direction == 'left'){
    fill(0);
    rect(400+changerx,300,66,25);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(0,255,255);}
    rect(415+changerx,308,40,10);
    rect(380+changerx,300,20,25);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery+60,415+changerx,308+changery+60);
    line(400+changerx,325+changery+60,415+changerx,318+changery+60);
    line(465+changerx,300+changery+60,455+changerx,308+changery+60);
    line(465+changerx,325+changery+60,455+changerx,318+changery+60);
    
    if (blinkervar < 30 && blinker == 'right'){
      fill(255,200,0);
      ellipse(400+changerx-10,300+changery+60,5,5);
      ellipse(475+changerx-10,300+changery+60,5,5);
    } else if (blinkervar < 30 && blinker == 'left'){
      fill(255,200,0);
      ellipse(400+changerx-10,325+changery+60,5,5);
      ellipse(475+changerx-10,325+changery+60,5,5);
    }
  } else if (direction == 'down'){
    fill(0);
    rect(400+changerx,300+changery,25,66);
    fill(0,0,255);
    rect(407.5+changerx,310+changery,10,40);
    rect(400+changerx,360+changery,25,20);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,407.5+changerx,310+changery);
    line(425+changerx,300+changery,417.5+changerx,310+changery);
    line(400+changerx,360+changery,407.5+changerx,350+changery);
    line(425+changerx,360+changery,417.5+changerx,350+changery);
    
    if (blinkervar < 30 && blinker == 'right'){
      fill(255,200,0);
      ellipse(400+changerx,300+changery,5,5);
      ellipse(400+changerx,375+changery,5,5);
    } else if (blinkervar < 30 && blinker == 'left'){
      fill(255,200,0);
      ellipse(425+changerx,300+changery,5,5);
      ellipse(425+changerx,375+changery,5,5);
    }
  }
  
}

function draw() {
  
  //setting up the Screen
  background(0);
  fill(200);
  strokeWeight(1);
  
  //updating variables
  blinkervar += 1;
  if (blinkervar > 45){
    blinkervar = 0;
  }
  carx += 1;
    
  // Drawing the graphics
  rect(375,0,750,420);
  fill(0,150,0);
  stroke(0);
  rect(375,0,300,175);
  rect(775,0,300,175);
  rect(375,275,300,200);
  rect(775,275,300,200);
  
  fill(0);
  let i = 10;
  while (i < 500){
    if (i != 190 && i != 250){
      rect(723,i,4,30);
    }
    i += 60;
  }
  
  i = 380;
  while (i < 1023){
    if (i != 680 && i != 740){
      rect(i,225,30,4);
    }
    i += 60;
  }
  
  drawcar(carx,240,'right','red','left');
  drawcar(500,240,'left','green','left');
  drawcar(600,240,'down','green','left');
  
  fill(0);
  rect(400,300,25,66);
  fill(0,0,255);
  rect(407.5,310,10,40);
  rect(400,360,25,20);
  
  fill(255);
  stroke(255);
  strokeWeight(1);
  line(400,300,407.5,310);
  line(425,300,417.5,310);
  line(400,360,407.5,350);
  line(425,360,417.5,350);
  
  // drawing light graphics
  strokeWeight(6);
  fill(0);
  stroke(225);
  line(720,160,800,160);
  line(800,300,800,220); 
  line(740,300,660,300);
  line(660,240,660,160);
  
  
  
}
