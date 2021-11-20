function setup() {
  createCanvas(windowWidth,windowHeight);
}

blinkervar = 0;
lightcounter = 0;
changetime = 6.0;
paused = false;
addtime = 4.0;
addcounter = 0;

lightchange_alg = 'two straights';

//lights
light1 = 'green';
light2 = 'red';
light3 = 'red';
light4 = 'red';

// l1in = y,clr,blinker
var l1in = [700,'orange','none',600,'purple','none',500,'blue','right',400,'white','left',300,'yellow','none'];
var l2in = [800,'blue','none',1000,'red','none',1150,'orange','none',1250,'green','right'];
var l3in = [-250,'white','left',-150,'purple','none',-50,'blue','right',50,'green','right'];
var l4in = [300,'red','left',400,'green','right',500,'blue','left'];

var l1out = [];
var l2out = [];
var l3out = [];
var l4out = [];

function randcolor(){
  rc = random(1,8);
  if (rc == 1){
    rc = 'blue';
  } else if (rc == 2){
    rc = 'red';
  } else if (rc == 3){
    rc = 'green';
  } else if (rc == 4){
    rc = 'yellow';
  } else if (rc == 5){
    rc = 'orange';
  } else if (rc == 6){
    rc = 'white';
  } else {
    rc = 'purple';
  }
  return rc;
}

function randblinker(){
  rb = random(1,4);
  if (rb == 1){
    rb = 'right';
  } else if (rc == 2){
    rb = 'left';
  } else {
    rb = 'none';
  }
  return rb;
}

function drawcar(x,y,direction,clr,blinker){
  let changerx = x-400;
  let changery = y-300;
  
  if (direction == 'right'){
    fill(0);
    rect(400+changerx,300+changery,66,25);
    
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(255,0,255);}
    rect(410+changerx,308+changery,40,10);
    rect(460+changerx,300+changery,20,25);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,410+changerx,308+changery);
    line(400+changerx,325+changery,410+changerx,318+changery);
    line(460+changerx,300+changery,450+changerx,308+changery);
    line(460+changerx,325+changery,450+changerx,318+changery);
    
    if (blinkervar < 30 && (blinker == 'right' || paused)){
      fill(255,200,0);
      ellipse(400+changerx,300+changery,5,5);
      ellipse(475+changerx,300+changery,5,5);
    } 
    if (blinkervar < 30 && (blinker == 'left' || paused)){
      fill(255,200,0);
      ellipse(400+changerx,325+changery,5,5);
      ellipse(475+changerx,325+changery,5,5);
    }
    
  } else if (direction == 'left'){
    fill(0);
    rect(400+changerx,300+changery,66,25);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(255,0,255);}
    rect(415+changerx,308+changery,40,10);
    rect(380+changerx,300+changery,20,25);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,415+changerx,308+changery);
    line(400+changerx,325+changery,415+changerx,318+changery);
    line(465+changerx,300+changery,455+changerx,308+changery);
    line(465+changerx,325+changery,455+changerx,318+changery);
    
    if (blinkervar < 30 && (blinker == 'right' || paused)){
      fill(255,200,0);
      ellipse(400+changerx-10,300+changery,5,5);
      ellipse(475+changerx-10,300+changery,5,5);
    } 
    if (blinkervar < 30 && (blinker == 'left' || paused)){
      fill(255,200,0);
      ellipse(400+changerx-10,325+changery,5,5);
      ellipse(475+changerx-10,325+changery,5,5);
    }
  } else if (direction == 'down'){
    fill(0);
    rect(400+changerx,300+changery,25,66);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(255,0,255);}
    rect(407.5+changerx,310+changery,10,40);
    rect(400+changerx,360+changery,25,20);
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,407.5+changerx,310+changery);
    line(425+changerx,300+changery,417.5+changerx,310+changery);
    line(400+changerx,360+changery,407.5+changerx,350+changery);
    line(425+changerx,360+changery,417.5+changerx,350+changery);
    
    if (blinkervar < 30 && (blinker == 'right' || paused)){
      fill(255,200,0);
      ellipse(400+changerx,300+changery,5,5);
      ellipse(400+changerx,375+changery,5,5);
    }
    if (blinkervar < 30 && (blinker == 'left' || paused)){
      fill(255,200,0);
      ellipse(425+changerx,300+changery,5,5);
      ellipse(425+changerx,375+changery,5,5);
    }
  } else {
    fill(0);
    rect(400+changerx,300+changery,25,60);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(255,0,255);}
    rect(407.5+changerx,310+changery,10,40);
    rect(400+changerx,280+changery,25,20);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,407.5+changerx,310+changery);
    line(425+changerx,300+changery,417.5+changerx,310+changery);
    line(400+changerx,360+changery,407.5+changerx,350+changery);
    line(425+changerx,360+changery,417.5+changerx,350+changery);
    
    if (blinkervar < 30 && (blinker == 'right' || paused)){
      fill(255,200,0);
      ellipse(425+changerx,285+changery,5,5);
      ellipse(425+changerx,360+changery,5,5);
    }
    if (blinkervar < 30 && (blinker == 'left' || paused)){
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
  strokeWeight(1);
   
  //updating variables
  blinkervar += 1;
  if (blinkervar > 45){
    blinkervar = 0;
  }
  if (!paused){
    lightcounter += 1;
  }
  addcounter += 1;
  if (addcounter == 10*60){
    print('pushed');
    let randadd = random(1,5);
    if (randadd <= 3 || true){
      l1in.push(400);
      l1in.push(randcolor());
      l1in.push(randblinker());
      l2in.push(1100);
      l2in.push(randcolor());
      l2in.push(randblinker());
    }
    addcounter = 0;
  }
  
  let framediff = changetime*60;
  
  if (lightchange_alg == 'one side'){
    if (lightcounter == framediff){
      light1 = 'yellow';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';
    } else if (lightcounter == framediff+60){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';
    } else if (lightcounter == framediff+90){
      light1 = 'red';
      light2 = 'green';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter == framediff+90+framediff){
      light1 = 'red';
      light2 = 'yellow';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter == framediff+90+framediff+60){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter == framediff+90+framediff+90){
      light1 = 'red';
      light2 = 'red';
      light3 = 'green';
      light4 = 'red';  
    } else if (lightcounter == framediff+90+framediff+90+framediff){
      light1 = 'red';
      light2 = 'red';
      light3 = 'yellow';
      light4 = 'red';  
    } else if (lightcounter == framediff+90+framediff+90+framediff+60){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter == framediff+90+framediff+90+framediff+90){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'green';  
    } else if  (lightcounter == framediff+90+framediff+90+framediff+90+framediff){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'yellow';  
    } else if  (lightcounter == framediff+90+framediff+90+framediff+90+framediff+60){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if  (lightcounter == framediff+90+framediff+90+framediff+90+framediff+90){
      light1 = 'green';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
      lightcounter = 0;
    } 
  } else if (lightchange_alg == 'stop and go'){
    if (lightcounter < 120){
      light1 = 'green';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < 240){
      light1 = 'red';
      light2 = 'green';
      light3 = 'red';
      light4 = 'red'; 
    } else if (lightcounter < 360){
      light1 = 'red';
      light2 = 'red';
      light3 = 'green';
      light4 = 'red'; 
    } else if (lightcounter < 480){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'green'; 
    } else {
      lightcounter = 0;
    } 
  } else if (lightchange_alg == 'two straights'){
    if (lightcounter < framediff){
      light1 = 'green';
      light2 = 'red';
      light3 = 'green';
      light4 = 'red'; 
    } else if (lightcounter < framediff+60){
      light1 = 'yellow';
      light2 = 'red';
      light3 = 'yellow';
      light4 = 'red'; 
    } else if (lightcounter < framediff+90){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red'; 
    } else if (lightcounter < framediff*2){
      light1 = 'red';
      light2 = 'green';
      light3 = 'red';
      light4 = 'green'; 
    } else if (lightcounter < framediff*2+60){
      light1 = 'red';
      light2 = 'yellow';
      light3 = 'red';
      light4 = 'yellow'; 
    } else if (lightcounter < framediff*2+90){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red'; 
    } else {
      lightcounter = 0;
    } 
  }
    
  // Drawing the graphics
  fill(200);
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
    
    if (l1in[i] < 210 && l1in[i] != '' && lightchange_alg != 'two straights'){
      if (l1in[i+2] == 'right'){
        l2out.push(l1in[i]+500);
        l2out.push(l1in[i+1]);
        l2out.push('none');
      } else if (l1in[i+2] == 'left'){
        l4out.push(l1in[i]+500);
        l4out.push(l1in[i+1]);
        l4out.push('none');
      } else {
        l3out.push(l1in[i]);
        l3out.push(l1in[i+1]);
        l3out.push('none');
      }
      l1in.splice(i,1);
      l1in.splice(i+1,1);
      l1in.splice(i+2,1);
    } else if (((l1in[i] < 275 || light1 == 'green') || (l1in[i]-l1in[i-3] > 100)) && !paused){
      l1in[i] = l1in[i]-1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l2in.length){
    if (l2in[i] != ''){
      drawcar(l2in[i],190,'left',l2in[i+1],l2in[i+2]);
    }
    
    if (l2in[i] < 750 && l2in[i] != '' && lightchange_alg != 'two straights'){
      if (l2in[i+2] == 'right'){
        l3out.push(l2in[i]-550);
        l3out.push(l2in[i+1]);
        l3out.push('none');
      } else if (l2in[i+2] == 'left'){
        l1out.push(l2in[i]-550);
        l1out.push(l2in[i+1]);
        l1out.push('none');
      } else {
        l4out.push(l2in[i]);
        l4out.push(l2in[i+1]);
        l4out.push('none');
      }
      l2in.splice(i,1);
      l2in.splice(i+1,1);
      l2in.splice(i+2,1);
    } else if ((light2 != 'red' || l2in[i] < 775 || (l2in[i]-l2in[i-3] > 100 && l2in[i] > 775)) && !paused){
      l2in[i] = l2in[i]-1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l3in.length){
    if (l3in[i] != ''){
      drawcar(690,l3in[i],'down',l3in[i+1],l3in[i+2]);
    }
    
    if (l3in[i] > 150 && l3in[i] != '' && lightchange_alg != 'two straights'){
      if (l3in[i+2] == 'right'){
        l4out.push(l3in[i]+525);
        l4out.push(l3in[i+1]);
        l4out.push('none');
      } else if (l3in[i+2] == 'left'){
        l2out.push(l3in[i]+525);
        l2out.push(l3in[i+1]);
        l2out.push('none');
      } else {
        l1out.push(l3in[i]);
        l1out.push(l3in[i+1]);
        l1out.push('none');
      }
      l3in.splice(i,1);
      l3in.splice(i+1,1);
      l3in.splice(i+2,1);
    } else if ((light3 != 'red' || l3in[i] > 100) && !paused){
      l3in[i] = l3in[i]+1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l4in.length){
    if (l4in[i] != ''){
      drawcar(l4in[i],240,'right',l4in[i+1],l4in[i+2]);
    }
    
    if (l4in[i] > 610 && l4in[i] != '' && lightchange_alg != 'two straights'){
      if (l4in[i+2] == 'right'){
        l1out.push(l4in[i]-410);
        l1out.push(l4in[i+1]);
        l1out.push('none');
      } else if (l4in[i+2] == 'left'){
        l3out.push(l4in[i]-410);
        l3out.push(l4in[i+1]);
        l3out.push('none');
      } else {
        l2out.push(l4in[i]);
        l2out.push(l4in[i+1]);
        l2out.push('none');
      }
      l4in.splice(i,1);
      l4in.splice(i+1,1);
      l4in.splice(i+2,1);
    } else if ((light4 != 'red' || l4in[i] > 600) && !paused){
      l4in[i] = l4in[i]+1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l1out.length){
    drawcar(690,l1out[i],'down',l1out[i+1],l1out[i+2]);
    if (!paused){
      l1out[i] = l1out[i]+1;
    }
    i += 3;
  }
  i = 0;
  while (i < l2out.length){
    drawcar(l2out[i],240,'right',l2out[i+1],l2out[i+2]);
    if (!paused){
      l2out[i] = l2out[i]+1;
    }
    i += 3;
  }
  i = 0;
  while (i < l3out.length){
    drawcar(740,l3out[i],'up',l3out[i+1],l3out[i+2]);
    if (!paused){
      l3out[i] = l3out[i]-1;
    }
    i += 3;
  }
  i = 0;
  while (i < l4out.length){
    drawcar(l4out[i],190,'left',l4out[i+1],l4out[i+2]);
    if (!paused){
      l4out[i] = l4out[i]-1;
    }
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
  if (light1 == 'green'){
    fill(0,255,0);
    ellipse(760,160,20,20);
  } else if (light1 == 'yellow'){
    fill(255,255,0);
    ellipse(750,160,20,20);
  } else {
    fill(255,0,0);
    ellipse(740,160,20,20);
  }
  if (light4 == 'green'){
    fill(0,255,0);
    ellipse(800,260,20,20);
  } else if (light4 == 'yellow'){
    fill(255,255,0);
    ellipse(800,250,20,20);
  } else {
    fill(255,0,0);
    ellipse(800,240,20,20);
  }
  if (light3 == 'green'){
    fill(0,255,0);
    ellipse(710,300,20,20);
  } else if (light3 == 'yellow'){
    fill(255,255,0);
    ellipse(700,300,20,20);
  } else {
    fill(255,0,0);
    ellipse(690,300,20,20);
  }
  if (light2 == 'green'){
    fill(0,255,0);
    ellipse(660,185,20,20);
  } else if (light2 == 'yellow'){
    fill(255,255,0);
    ellipse(660,190,20,20);
  } else {
    fill(255,0,0);
    ellipse(660,195,20,20);
  }
  
  // display controls  
  fill(0);
  rect(0,0,375,windowHeight);
  
  if (paused){
    fill(200,100,0);
  } else {
    fill(0,200,0);
  }
  rect(25,50,150,50);
  fill(200,200,0);
  rect(200,50,150,50);
  fill(255);
  textSize(35);
  text('Simulation Controls',50,35);
  textSize(25);
  text('Run/Pause          Reset',40,80);
  fill(0,150,200);
  text('Traffic light algorithm',40,150);
  text('Light change time',40,260);
  text(20);
  fill(255);
  text('One side at a time',40,200);
  
  print(mouseX,mouseY) ;
  fill(255);
  rect(10,275,300,10);
 
}

function mouseClicked(){
  if (mouseX > 200 && mouseX < 350 && mouseY > 50 && mouseY < 100){
    location.reload();
  }
  if (mouseX > 25 && mouseX < 175 && mouseY > 50 && mouseY < 100){
    paused = !paused;
  }
}
