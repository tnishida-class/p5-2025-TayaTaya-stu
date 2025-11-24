// ==== マリオ風 2Dアクション ====
let x, y;        // 位置
let vx, vy;      // 速度
const g = 1;     // 重力
let size;        // キャラクターの大きさ
let groundY;     // 地面の高さ

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = height * 0.1;
  groundY = height * 0.8;
  x = width / 2;
  y = groundY - size / 2;
  vx = 0;
  vy = 0;
}

function draw() {
  background(160, 192, 255);

  

  // 地面を描く
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size);

  // ==== 要件１：左右キーで移動 ====
  let speed = 4;

  // ==== 要件２：左右キー＋SHIFTでスピードアップ ====
  if (keyIsDown(SHIFT)) {
    speed = 8; // スピードアップ
  }

  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }

  // ==== 要件３：ジャンプ ====
  // 重力を加える
  vy += g;
  y += vy;

  // 地面に着地したら停止
  if (y > groundY - size / 2) {
    y = groundY - size / 2;
    vy = 0;
  }

  // 画面外に出ないよう制限
  x = constrain(x, size / 2, width - size / 2);
}

// ==== スペースキーでジャンプ（空中ジャンプ禁止） ====
function keyPressed() {
  if (key === " " && y >= groundY - size / 2) {
    vy = -20; // ジャンプの勢い（上向き）
  }
}

// ==== ウィンドウサイズ変更対応 ====
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  groundY = height * 0.8;
}
