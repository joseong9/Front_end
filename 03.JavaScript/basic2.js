//복합 대입 연산자

let a = 10;
a = a + 10;
a += 10;
console.log(a)

let hello = 'Hello';
hello += "World"
console.log(hello);

let b = 1;
console.log(a++, ++b);
console.log(a, b);

console.log(Number('101'),String(101),Number(true),Number(false));
console.log(Boolean(0), Boolean(1), Boolean(''),Boolean(undefined));
console.log(Boolean(0.0),Boolean(2),Boolean('str'));

console.log(Number('string'));
console.log(Number('0o123'), Number('0xf123'), Number('ob101'));

console.log(52+'37', 21+31+'37');
console.log(1+true, true+'bool')

console.log(1 == 1.0, 1 === 1.0);
console.log(1 == '1', 1 === '1', 1 !== '1');
