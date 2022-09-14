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
console.log(fruits3)