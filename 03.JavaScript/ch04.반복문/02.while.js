// 1에서 어디까지 더하면 1000 이상인가
let number = 1, sum = 0
while (true) {
    sum +=number;
    if (sum > 1000)
        break;
    number++;
}
console.log(sum, number);

sum = 0;
for (let i=1; i < 1000; i++) {
    sum +=i;
    if (sum > 1000)
        break;
}
//console.log(sum, i);

let i;
sum = 0;
for (i=1; i < 1000; i++) {
    sum +=i;
    if (sum > 1000)
        break;
}
console.log(sum, i);