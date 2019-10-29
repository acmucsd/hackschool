class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

let daniel = new Person("Daniel", 19);
daniel.greet();
