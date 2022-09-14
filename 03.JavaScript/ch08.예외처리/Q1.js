function random() {
    while(true) {
        let num1 = Math.floor((Math.random()*20)+1);
        let num2 = Math.floor((Math.random()*21)+10);
        const lis = [];
        if((num1+4) <= num2) {
            console.log(num1, num2);
            for (let i = num1; i<=num2; i++) {
                lis.push(2**i);
            }
            lis.splice(1,1);
            lis.splice(-2,1);
            return lis;
        }
    }
}
console.log(random());