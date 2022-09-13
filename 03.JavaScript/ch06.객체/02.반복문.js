const maria = {name:'마리아', age:25, gender:'여자'};
const james = {'name': '제임스', 'age': 28, 'gender': '남자'};

//for 반복문에서 in 을 사용해야 함
for (let key in maria) {
    console.log(key, maria[key]);
}

const persons = [maria, james];
for (let person of persons) {
    for(let key in person) {
        console.log(key, person[key]);
    }
}

console.clear();
console.log(persons);
console.log('----------------------------------------------')

//외부와 데이터를 주고 받는 경우
const externalForm = JSON.stringify(persons);
console.log(externalForm);

const internalForm = JSON.parse(externalForm);
console.log(internalForm);