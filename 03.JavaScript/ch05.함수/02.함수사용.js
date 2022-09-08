
function getDivisors(num) {
    let divisors = [];
    for (let k=1; k<num; k++) {
        if (num % k == 0) {
            divisors.push(k)
        }
    }
    return divisors;
}

function sumArray(array) {
    let sum = 0;
    for (let div of array) {
        sum += div;
    }
    return sum;
}

for (let i=2; i<=10000; i++) {
    const array = getDivisors(i);
    const arrsum = sumArray(array);
    if (arrsum == i) {
        console.log(i);
        console.log(array,toString());
    }
}