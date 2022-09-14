//1.Destructuring assignment
const fruits = ['apple', 'banana', 'cherry', 'grape'];
const [a,b,c,g] = fruits;
console.log(a,b,c,g);

const product = {name:'mouse', price:20000};
const {name, price} = product;
console.log(name, price);

//2.spread syntax
const fruits1 = ['grape', 'mango'];
const furits2 = [fruits, fruits1];
console.log(furits2);
const fruits3 = [...fruits, ...fruits1];
console.log(fruits3);

const numbers = [4, 16, 9, 24, 56];
console.log(Math.max(numbers));
console.log(Math.max(...numbers))

//3.let, const
//4.template literals
//5.3항 연산자
//6.화살표 함수
//7.default parameters
//8.object shorthand property
//9.class
//10.set
const mySet = new Set()
mySet.add(1);
mySet.add(3);
mySet.add(1);
console.log(mySet);
console.log(mySet.had(3));