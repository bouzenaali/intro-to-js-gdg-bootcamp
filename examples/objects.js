//      object = {key:value,
//               function()}
class person {
    constructor(firstname, lastname, age, city) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.city = city;
    }
    
    fullName() {
        return this.firstname + " " + this.lastname;
    }

}

const person1 = new person("Malek", "Mohamed", 21, "bir khadem");
const person2 = new person("Ali", "Bouzena", 19, "Bejaia");

// examples of objects
// const person = {
//     firstname: "Malek",
//     lastname: "Mohamed",
//     age: 21,
//     city: "bir khadem",
//     fullName: function() {
//         return this.firstname + " " + this.lastname;
//     }

// };

// accessing object properties
console.log(person.name);
console.log(person.age);
console.log(person.city);

// changing object properties
person.age = 22;
console.log(person.age);

// adding properties
person.country = "Algeria";
console.log(person.country);

// deleting properties
delete person.city;
console.log(person.city);
