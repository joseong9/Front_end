class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    intro() {
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`)
    }
}

james = new person('제임스', 24, '남자');
maria = new person('마리아', 23, '여자');
console.log(james);
console.log(maria);
james.intro();
maria.intro();