for (let b =1; b< 1000; b++) {
    for (let a = 1; a < b; a++) {
        c = 1000 -a -b;
        if (a*a + b*b == c*c) {
            console.log(a, b, c);
            break;
        }
    }
}