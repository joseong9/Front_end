let input = 12;
let divisors = [];
for (let i=1; i<input; i++) {
    if (input % i == 0)
        divisors.push(i)
}
console.log(divisors)