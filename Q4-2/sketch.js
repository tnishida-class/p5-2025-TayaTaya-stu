// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);


  const dx = width / scores.length;
  
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
   const h = height * scores[i] / 100;
     ellipse(i * dx + dx / 2, height - h, 10);

  }


for (let i = 1; i < scores.length; i++) {

    const h = height * scores[i] / 100;
  
  px=(i-1) * dx + dx / 2;
  py=height-height * scores[i-1] / 100
    line(i * dx + dx / 2,height - h,px, py);

  }

}


 

  
