// EUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0,0,255);
  noStroke();
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12;
    const x = 100 + cos(theta) * 50;
    const y = 100 + sin(theta) * 50;
    fill(255,255,0);
    star(x, y, 10);
  }
}

// BLANK[1] ヒント：star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
function star(cx,cy,r){

 beginShape();
 for(let i= 0; i<5; i++){

   let theta=TWO_PI*i*2/5
   let x=cx+cos(theta)*r;
   let y=cy+sin(theta)*r;

    vertex(x,y);

 }

  endShape(CLOSE);
}