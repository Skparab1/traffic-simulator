function setup() {
  createCanvas(windowWidth,windowHeight);
}

blinkervar = 0;
carx = 400;

//lights
light1 = 'on';
light2 = 'off';
light3 = 'off';
light4 = 'off';

// l1in = y,clr,blinker
var l1in = [360,'blue','right',260,'white','left',160,'yellow','none'];
var l2in = [800,'orange','right',900,'green','left',1000,'red','none'];

var l1out = [];
var l2out = [];
var l3out = [];
var l4out = [];

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
    rect(400+changerx,300+changery,66,25);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(0,255,255);}
    rect(415+changerx,308+changery,40,10);
    rect(380+changerx,300+changery,20,25);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,415+changerx,308+changery);
    line(400+changerx,325+changery,415+changerx,318+changery);
    line(465+changerx,300+changery,455+changerx,308+changery);
    line(465+changerx,325+changery,455+changerx,318+changery);
    
    if (blinkervar < 30 && blinker == 'right'){
      fill(255,200,0);
      ellipse(400+changerx-10,300+changery,5,5);
      ellipse(475+changerx-10,300+changery,5,5);
    } else if (blinkervar < 30 && blinker == 'left'){
      fill(255,200,0);
      ellipse(400+changerx-10,325+changery,5,5);
      ellipse(475+changerx-10,325+changery,5,5);
    }
  } else if (direction == 'down'){
    fill(0);
    rect(400+changerx,300+changery,25,66);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(0,255,255);}
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
  } else {
    fill(0);
    rect(400+changerx,300+changery,25,60);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(0,255,255);}
    rect(407.5+changerx,310+changery,10,40);
    rect(400+changerx,280+changery,25,20);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,407.5+changerx,310+changery);
    line(425+changerx,300+changery,417.5+changerx,310+changery);
    line(400+changerx,360+changery,407.5+changerx,350+changery);
    line(425+changerx,360+changery,417.5+changerx,350+changery);
    
    if (blinkervar < 30 && blinker == 'right'){
      fill(255,200,0);
      ellipse(425+changerx,285+changery,5,5);
      ellipse(425+changerx,360+changery,5,5);
    } else if (blinkervar < 30 && blinker == 'left'){
      fill(255,200,0);
      ellipse(400+changerx,285+changery,5,5);
      ellipse(400+changerx,360+changery,5,5);
    }
  }
  
}

function draw() {
  
  //setting up the Screen
  createCanvas(windowWidth,windowHeight);
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
  rect(375,0,750,windowHeight);
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
  
  // templates
  //drawcar(carx,50,'right','red','left');
  //drawcar(carx,100,'left','green','left');
  //drawcar(500,carx-300,'down','green','left');
  //drawcar(700,carx-300,'up','orange','right');
  
  i = 0;
  while (i < l1in.length){
    if (l1in[i] != ''){
      drawcar(740,l1in[i],'up',l1in[i+1],l1in[i+2]);
    }
    
    if (l1in[i] < 210 && l1in[i] != ''){
      if (l1in[i+2] == 'right'){
        l2out.push(l1in[i]+500);
        l2out.push(l1in[i+1]);
        l2out.push(l1in[i+2]);
      } else if (l1in[i+2] == 'left'){
        l4out.push(l1in[i]+500);
        l4out.push(l1in[i+1]);
        l4out.push(l1in[i+2]);
      } else {
        l3out.push(l1in[i]);
        l3out.push(l1in[i+1]);
        l3out.push(l1in[i+2]);
      }
      l1in.splice(i,1);
      l1in.splice(i+1,1);
      l1in.splice(i+2,1);
    } else if (light1 == 'on'){
      l1in[i] = l1in[i]-1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l2in.length){
    if (l2in[i] != ''){
      drawcar(l2in[i],190,'left',l2in[i+1],l2in[i+2]);
    }
    
    if (l2in[i] < 210 && l2in[i] != ''){
      if (l2in[i+2] == 'right'){
        l2out.push(l2in[i]+500);
        l2out.push(l2in[i+1]);
        l2out.push(l2in[i+2]);
      } else if (l2in[i+2] == 'left'){
        l4out.push(l2in[i]+500);
        l4out.push(l2in[i+1]);
        l4out.push(l2in[i+2]);
      } else {
        l3out.push(l2in[i]);
        l3out.push(l2in[i+1]);
        l3out.push(l2in[i+2]);
      }
      l2in.splice(i,1);
      l2in.splice(i+1,1);
      l2in.splice(i+2,1);
      print('l1in',l1in);
      print('l3out',l3out);
    } else if (light2 == 'on'){
      l2in[i] = l2in[i]-1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l1out.length){
    drawcar(690,l1out[i],'down',l1out[i+1],l1out[i+2]);
    l1out[i] = l1out[i]+1;
    i += 3;
  }
  i = 0;
  while (i < l2out.length){
    drawcar(l2out[i],240,'right',l2out[i+1],l2out[i+2]);
    l2out[i] = l2out[i]+1;
    i += 3;
  }
  i = 0;
  while (i < l3out.length){
    drawcar(740,l3out[i],'up',l3out[i+1],l3out[i+2]);
    l3out[i] = l3out[i]-1;
    i += 3;
  }
  i = 0;
  while (i < l4out.length){
    drawcar(l4out[i],190,'left',l4out[i+1],l4out[i+2]);
    l4out[i] = l4out[i]-1;
    i += 3;
  }
  
  // drawing light graphics
  strokeWeight(6);
  fill(0);
  stroke(225);
  line(720,160,800,160);
  line(800,300,800,220); 
  line(740,300,660,300);
  line(660,240,660,160);
  
  strokeWeight(1);
  if (light1 == 'on'){
    fill(0,255,0);
    ellipse(760,160,20,20);
  } else {
    fill(255,0,0);
    ellipse(740,160,20,20);
  }
  if (light2 == 'on'){
    fill(0,255,0);
    ellipse(800,260,20,20);
  } else {
    fill(255,0,0);
    ellipse(800,240,20,20);
  }
  if (light3 == 'on'){
    fill(0,255,0);
    ellipse(710,300,20,20);
  } else {
    fill(255,0,0);
    ellipse(690,300,20,20);
  }
  if (light4 == 'on'){
    fill(0,255,0);
    ellipse(660,185,20,20);
  } else {
    fill(255,0,0);
    ellipse(660,195,20,20);
  }
  
}
