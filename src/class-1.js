class Person{
    constructor (name){
        this.name = name;
    }

    getName () {
        return this.name;
    }

    setName (name) {
        this.name = name;
    }
}

var person = new Person('Roberto');

console.log(person.getName());

person.setName('Marco');
console.log(person.getName());