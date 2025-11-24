// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;
let size; // キャラクターのサイズ
let groundY;
function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  size = height * 0.1; 
  y = height * 0.8-size/2;
  vx = 0;
  vy = 0;
  // キャラクターのサイズ
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);  

  // 地面を描く
  groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動

 if(keyIsDown(LEFT_ARROW)){x-=4;}
if(keyIsDown(RIGHT_ARROW)){x+=4;}

if(keyIsDown(LEFT_ARROW)&&keyIsDown(SHIFT)){x-=8;}
if(keyIsDown(RIGHT_ARROW)&&keyIsDown(SHIFT)){x+=8;}    

  y+=vy;
  vy+=g;

  if(y>groundY-size/2){
    y=groundY-size/2;
    vy=0;


  }
  x=constrain(x,0,width);
}


 function keyPressed(){
  if(key==" "&& y>=groundY-size/2){
    vy=-20;
  }
 }




// {""押したときに飛び上がって重力込の力で下に落ちる→地面につくとvy=0になる}

