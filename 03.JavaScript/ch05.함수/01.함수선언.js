function funcName() {
    console.log('함수 이름을 갖는 함수');
}
funcName();

const fn = function() {
    console.log('익명 함수');
}
fn()
console.log(fn, typeof fn);

const arrowFunc = () => {
    console.log('화살표 함수');
}
arrowFunc();
console.log(arrowFunc, typeof arrowFunc);

const square = (x, y) => {
    return x*x + y*y;
}
console.log(square(3,5));

const square1 = x => {
    return x*x;
}
console.log(square1(3))

const sq = x => x*x;
console.log(sq(10))

const myFunc = x => x%2==0? x*x: x*x*x;
console.log(myFunc(2), myFunc(3));