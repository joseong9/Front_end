// let i = Math.floor((Math.random()*89)+11);
// let j = Math.floor((Math.random()*89)+11);
let number = Math.floor((Math.random()*89)+11);
let number1 = Math.floor((Math.random()*89)+11);
let index = 1;
let count = 0;
let countls = new Set();

console.log(number,number1);

for(let i = 1; i <= Math.max(number,number1);i++){
    if(number % i == 0 && number1 % i == 0 ){
        countls.add(i);
    }
}
console.log(countls);