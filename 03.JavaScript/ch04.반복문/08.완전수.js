for (let i=2; i<=10000; i++) {
    let divisors = [];
    for (let  k=1; k<i; k++) {
        if (i % k == 0) {
            divisors.push(k);
        }
    }
    let sum = 0;
    for (let div of divisors) {
        sum += div;
    }
    if (sum == i) {
        console.log(i);
        console.log(divisors.toString());
    }
}