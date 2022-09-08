const num = 5;
let product = 1;
for (let i=1; i<=num; i++) {
    product *=i;
}
console.log(`${num}!은 ${product}입니다`)

function factorial(n) {
    if (n==0)
        return 1;
    return n* factorial(n-1)
}
console.log(`10!은 ${factorial(10)}입니다`)