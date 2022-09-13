function person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    person.prototype.intro = function() {
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`)
    }
};

james = new person('제임스', '28', '남자');
maria = new person('마리아', '25', '여자');
james.intro();
maria.intro();