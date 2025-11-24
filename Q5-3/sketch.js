// カレンダーを描画しよう
function setup() {
  createCanvas(200, 240); //縦長に変更
  drawCalendar(2025, 11  );
}

function drawCalendar(y, m) {//カレンダー書くやつ
  for (let i = 0; i < 7; i++) {
    const x = i * width / 7;
    const y = 20;
    stroke(255);
    text(dayOfWeekAsString(i), x, y);
  }

  for (let j = 0; j < 8; j++) {   //カレンダーの縦線
    stroke(0);
    strokeWeight(2);
    const wid = width / 7;
    const hei = 40;
    line(j * wid - wid / 4, 0, j * wid - wid / 4, 6 * hei);
  }
  for (let ho = 0; ho < 8; ho++) {//カレンダーの横線
    stroke(0);
    strokeWeight(2);
    line(0, ho * 40, width, ho * 40);

  }

  let dow = dayOfWeek(y, m, 1); //dowは,？月１日の曜日（a配列の順番の数字で）
  let x, yPos;
  for (let d = 1; d <= daysInMonth(y, m); d++) {
    // BLANK[3] まずは daysInYear, dayOfWeek を作ろう
  let col = (d - 1 + dow) % 7;
  let row = Math.floor((d - 1 + dow) / 7);
  x = col * (width / 7) + 5;
yPos = (row + 1) * 40 + 20;
    fill(0);
    if(col==0){fill(255,0,0)}
    if(col==6){fill(0,0,255)}
    noStroke();
    text(d,x,yPos);
  }
}

function isLeapYear(y) {
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y) { ///一年の日数
  // BLANK[1] hint: 閏年なら366日、そうでなければ365日
  if (isLeapYear(y)) {
    return 366;
  }
  else {
    return 365;
  }

}

function daysInMonth(y, m) { //各月は何日あるか；４月は３０日まで等）
  if (m == 2) {
    return isLeapYear(y) ? 29 : 28;
  }
  else if (m == 4 || m == 6 || m == 9 || m == 11) {
    return 30;
  }
  else {
    return 31;
  }
}

function dayOfYear(y, m, d) { //その日が年のうち、何日目か
  let count = 0;
  for (let i = 1; i < m; i++) {
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d) {   //その日が何曜日か
  // BLANK[2] hint: 曜日がわかる日からの経過日数を求め7の剰余を取る　たとえば1970年1月1日木曜日
  let count = 0;
  for (let i = 1970; i < y; i++) {
    count += daysInYear(i);
  }

  let days = count + dayOfYear(y, m, d)

  if (days % 7 == 1) { return 4 ;}//木曜
  if (days % 7 == 2) { return 5 ;}//金曜
  if (days % 7 == 3) { return 6 ;}
  if (days % 7 == 4) { return 0 ;}
  if (days % 7 == 5) { return 1 ;}
  if (days % 7 == 6) { return 2 ;}
  if (days % 7 == 0) { return 3 ;}
}

function dayOfWeekAsString(dow) {
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];   //dowは曜日番号。dow番目＝dow曜日（上のdowとは別物）
}
