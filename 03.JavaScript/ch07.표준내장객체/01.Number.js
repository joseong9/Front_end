let number = 273.1;
let num = Number('273.1');
console.log(num === number);

// 기본 자료형 - 숫자 문자열 불리언

// 객체 자료형
let obj = new Number(273.1);
console.log(typeof(number), typeof(obj), typeof(num))

let pi = Math.PI;
console.log(pi)
console.log(pi.toExponential(), pi.toFixed(2), pi.toPrecision(6));

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
console.log(Math.pow(2,53)-1);