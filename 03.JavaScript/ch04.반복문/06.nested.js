//별로 직삼각형 그리기
for (let i = 1; i<=5; i++) {
    let stars = '';
    for (let k=1; k<=i; k++) {
        stars += '*';
    }
    console.log(stars);
}

for (let i=5; i>=1; i--) {
    let stars = '';
    for (let k=1; k<=i; k++) {
        stars += '*'
    }
    console.log(stars);
}