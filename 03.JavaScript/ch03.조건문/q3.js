const score = Math.ceil(Math.random() * 100);
console.log(`점수는 ${score}입니다`)
switch (true) {
    case (score >= 90):
        console.log('A');
        break;
    case (score>= 80):
        console.log('B');
        break;
    case (score >= 70):
        console.log('C');
        break;
    case (score >= 60):
        console.log('D');
        break;
    case (score < 60):
        console.log('F');
        break;
}