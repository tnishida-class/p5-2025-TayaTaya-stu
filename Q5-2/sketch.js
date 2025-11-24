function setup(){
  createCanvas(400, 400);
  textSize(16);
}

function draw(){
  background(220);
  balloon("関数は難しい？", 100, 100, 3);
  balloon("関数は便利？", mouseX, mouseY,3);
}

function balloon(t, x, y,k){   //ｋは吹き出しの角の数（形の変化）
  const w = textWidth(t); // テキストの幅
  const h = textAscent() + textDescent(); // テキストの高さ
  const p = 4; // 余白の大きさ (padding)

  push();

  // BLANK[1] 吹き出しの背景を先に描く
  fill(255,0,0);

  let rx=(x+textWidth(t)/2);   //テキスト中心のｘ座標
  let ry=y+textAscent();       //テキスト中心のｙ座標

  // BLANK[2] 吹き出しの三角形を描く
   beginShape();    // 点つなぎを始める
  for(let i = 0; i < k; i++){
    const theta = TWO_PI * i * 1/k - HALF_PI;
    const cx = rx + cos(theta) * 50;
    const cy = ry + sin(theta) * 50;
    vertex(cx, cy);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる

  // 吹き出しのテキストを次に描く
  textAlign(LEFT, CENTER);
  fill(255);
  text(t, x + p, y + h / 2 + p);

   fill(255,0,0);
  triangle( rx ,ry+25,rx+30,ry+25,rx+30,ry+60);
  
  pop();
}


