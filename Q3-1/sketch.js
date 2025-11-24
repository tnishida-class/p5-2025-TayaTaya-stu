// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count = 0; // 何フレーム目か
let speed = 1; // アニメーションの速さ
let size = 50;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(160, 192, 255);


  // BLANK[2]
  count = (count + speed) % cycle;

  if (keyIsPressed) {
    speed = 2;
  }
  else {
    speed = 1;
  }

  if (count < cycle / 2) {
    size = count + 50;
  } else {
    size = (cycle - count) + 50;

  }

  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  ellipse(width / 2, height / 2, size);
}


