// const로 변수 선언
// 값이 변하는 변수는 var로 선언 var는 오버라이딩 됨
// let을 지금은 더 사용

let d = 10;
console.log(Math.PI, Math.sqrt(d));

console.log(typeof(3.1),typeof(2))

console.log(typeof('abc'),typeof('안녕'));

//let tl = `a=${a}, b=${b}`;
//tl = tl + ' 문자열 결합';
//console.log(tl);
let st = '문자열' + 123;
console.log(st);
let today = new Date();
console.log(today, today.getFullYear(), today.getMonth()+1);
console.log(typeof today);

console.log(4>3, 4<3)

console.log(4>3 && 10>8, '가나'<'다라' || flase);
console.log(today.getHours() >= 9 && today.getHours() <= 18);

let pi;
console.log(typeof pi);