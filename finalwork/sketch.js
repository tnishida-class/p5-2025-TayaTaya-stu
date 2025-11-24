let s = 40;            // 敵のサイズ
let balls = [];
let hitCount = 0;
let hitMax = 30;
let enemyX;
let enemyVX = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  enemyX = width / 2; // 敵の初期の x 座標
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// プレイヤー用ボール作成
function mouseDragged() {
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if (mag(dx, dy) > 5) {
    balls.push({ x: mouseX, y: mouseY, vx: dx, vy: dy, size: 20 });
  }
}

function draw() {
  background(160, 192, 255);
  fill(0);
  textSize(24);
  text("ドラッグで30回アフロちゃんに愛の玉を届けよう！Enterキーでやり直し", 200, 50);

  // 敵の移動
  enemyX += enemyVX;
  if (enemyX - s / 2 < 0 || enemyX + s / 2 > width) {
    enemyVX *= -1; // 壁で跳ね返る
  }

  // 敵の髪と顔
  let eyeY = height / 5 + s / 4
  fill(100, 50, 0); // 髪
  ellipse(enemyX, height / 5, s);

  fill(255);
  rect(enemyX - s / 8, eyeY - s / 10, s / 8, s / 16);


  fill(255, 200, 200); // 顔
  ellipse(enemyX, height / 5 + s / 4, s / 2);

  fill(0);
  ellipse(enemyX - s / 8, eyeY, s / 8); //目
  ellipse(enemyX + s / 8, eyeY, s / 8);
  fill(255, 0, 0);//口
  triangle(enemyX - s / 10, eyeY + s / 8, enemyX + s / 10, eyeY + s / 8, enemyX, eyeY + s / 6);
  fill(255);//白目
  ellipse(enemyX - s / 8, eyeY, s / 16);
  ellipse(enemyX + s / 8, eyeY, s / 16);
  fill(255, 105, 180);//ほっぺ
  ellipse(enemyX - s / 6, eyeY + s / 10, s / 8, s / 16);
  ellipse(enemyX + s / 6, eyeY + s / 10, s / 8, s / 16);


  if (hitCount < hitMax) {
    s += 0.5;
    s = constrain(s, 20, width);
  }


  // プレイヤー
  fill(255, 100, 150);
  noStroke();
  const cx1 = mouseX - 15;//左の丸の中心ｘ
  const cy1 = mouseY;
  const cx2 = mouseX + 15;//右の丸の中心ｘ
  const cy2 = mouseY;
  ellipse(cx1, cy1, 40);
  ellipse(cx2, cy2, 40);

  triangle(cx1 - 15, cy1 + 13, cx2 + 15, cy2 + 13, mouseX, mouseY + 40);


  // ボールの描画と移動

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    fill(b.hit ? color(255, 0, 0) : color(255));
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

  // 画面外のボール削除
  balls = balls.filter(b => b.x > 0 && b.x < width && b.y > 0 && b.y < height);

  // ボールと敵の顔の衝突判定

  let hit = false;
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    let faceX = enemyX;
    let faceY = height / 5 + s / 4;
    let faceR = s / 4;
    hit = dist(b.x, b.y, faceX, faceY) < faceR + b.size / 2
    if (!b.hit && hit) {
      b.hit = true;
      hitCount++;



    }
  }

  // 勝利表示
  if (hitCount >= hitMax) {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("愛が届いた!", width / 2, height / 2);
    enemyX = width / 2;
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    resetGame();
  }
}


function resetGame() {
  // 敵の位置とサイズをリセット
  enemyX = width / 2;
  s = 40;
  enemyVX = 3;

  // ボール配列をリセット
  balls = [];

  // ヒットカウントをリセット
  hitCount = 0;
}