//String 객체
let hello = '안녕하세요';
let helloFromConstructor = new String('안녕하세요');

//속성
console.log(hello.length)

//methods
console.log(hello[1], hello.charAt(1))
console.log(hello.concat(' 여러분'));
console.log(hello.indexOf('하'), hello.indexOf('한'));

let totalSeconds = 0;
for (let hour = 0; hour<24; hour++) {
    for (let minute = 0; minute<60; minute++) {
        let display = String(hour) + ':' + String(minute);
        if (display.indexOf('3') >=0) {
            totalSeconds +=60;
        }
    }
}
console.log(totalSeconds);

// let sample = 'A quick brown fox 갈색의 재빠른 여우가 over the lazy dog';
// let newStr = sample.replace(/[A-Z]/, ' ');
// console.log(newStr);
// newStr = sample.replace(/r/g, 'R');
// console.log(newStr);
// newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
// console.log(newStr);

let str = 'Apple, Banana, pineapple';
console.log(str.slice(7, 7+6));
console.log(str.slice(7));

const fruits = str.split(',');
console.log(fruits);

// let numbers = ''
// for (let i=0; i<=10; i++) //1 23456789 10
//     numbers += String(i);
// console.log(numbers.split('1').length-1);

// let numbers0 = ''
// for (let i = 0; i<=1000; i++)
//     numbers0 += String(i);
// console.log(numbers.split('0').length);

// let numbers9 = ''
// for (let i =0; i<=1000; i++)
//     numbers9 += String(i);
// console.log(numbers.split('9').length);
let numbers = ''
for (let i=1; i<=1000; i++) //1 23456789 10
    numbers += String(i);
let obj = {};
for (let i=0; i<10; i++) {
    obj[String(i)]= numbers.split(String(i)).length-1;
};
console.log(obj);

let number = ''
for (let i=1; i<=100; i++)
    number += String(i);
let obj1 = {};
for (let i=0; i<10; i++) {
    obj1[String(i)] = number.split(String(i)).length-1;
};
console.log(obj1);