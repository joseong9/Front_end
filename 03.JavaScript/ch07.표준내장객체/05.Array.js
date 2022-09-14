// array 생성
const cars = ['Saab', 'Volvo', 'BMW'];
const persons = new Array('James', 'Maria');
console.log(cars, persons);

console.log(cars.length, persons.length);

console.log(cars[cars.length-1]);

console.log(cars.concat(persons));
console.log(cars + persons);
console.log([cars, persons]);

console.log(cars.join(' | '));

let car = cars.pop();
console.log(car, cars);
console.clear();

cars.push('Benz');

console.log(cars);

console.log(cars.reverse());
console.log(cars);
function reverseString(str) {
    // let strArray = str.split('');
    // strArray.reverse()
    // let result = strArray.join('');
    // return result;
    return str.split('').reverse().join('');
}
let rs = str => str.split('').reverse().join('');
console.log(reverseString('기러기, 스위스, 토마토'));