
let s = 20;
let balls;
let hitCount = 0;
let hitMax = 10;
let enemyX;
let enemyVX = 3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
  enemyX = width / 2; // 敵の初期 x 座標
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function draw() {
  background(160, 192, 255);

  ellipse(enemyX, height / 5, s);   //敵の髪の毛
  ellipse(enemyX, height / 5 + s / 4, s / 2);  //敵の顔部分

  enemyX += enemyVX;

  if (enemyX - s / 2 < 0 || enemyX + s / 2 > width) { // ← s/2で幅分を考慮
    enemyVX *= -1;
  }

  if (hitCount < hitMax) {
    s += 0.1;
    s = constrain(s, 20, width);
  }

  ellipse(mouseX, mouseY, 40);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    fill(255);
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

 balls = balls.filter(b => b.x > 0 && b.x < width && b.y > 0 && b.y < height);


  for (let j = 0; j < balls.length; j++) { // すべてのボールと衝突判定
    let b = balls[j];

    let faceX = width / 2;
    let faceY = height / 5 + s / 4
  if (dist(b.x, b.y, faceX, faceY) < s / 4 + b.size / 2) {
    hitCount += 1;

  }

  if (hitCount >= hitMax) {
    fill(255, 0, 0);
    textSize(32);
    text("あなたの勝ち!", width / 2 - 80, height / 2);
  }
}


}


function mouseDragged() {
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if (mag(dx, dy) > 5) {
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}