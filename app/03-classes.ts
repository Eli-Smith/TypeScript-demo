class Person {
    firstName: string;
    lastName: string;

    // Adding a method to our class
    // Methods in our class do not require the function keyword
    sayHello(){
                           // this.firstName will point to a specific instance of our Person class
                           // not just a generic message
        console.log('Hello', this.firstName);
    }

    helloFullName(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

// Creating a new Person
let kenn: Person = new Person();
// Using . notation to set the value of kenn.firstName
kenn.firstName = 'Kenn'
// Using . notation to call on the method nested within our class
// In this instance this.firstName will look at the value of firstName in the kenn instance of our Person
// The method will console.log 'Hello Kenn'
kenn.sayHello();

let sheriff: Person = new Person();
sheriff.firstName = 'Sheriff';
sheriff.lastName = 'Holler'

sheriff.helloFullName();

let phil: Person = new Person();

phil.firstName = 'Phil';
phil.lastName = 'Donahue';

console.log(phil.lastName);

/* 
    CLASSES BREAKDOWN
    - EXAMPLE CODE -
            1       2      3    4
        let jon: Person = new Person();

        1.) - We declare a variable with a custom name
        2.) - We declare the data type of our new variable, in this case our Person class
        3.) - We use the new keyword to instantiate a new instance of our Person class
        4.) - We call the class with (). The () invoke the constructor function.

        SIMPLIFIED:
        In the above we code we create a new variable, jon. We tell typescript that the data type of jon
        will be our Person class (remember that our person class has 2 key/value pairings declared when we
        wrote our Person class!). Using the 'new' keyword and Person() we create a new Person, jon. Now
        that jon is a Person, we can dig into the variables properties using . notation (e.g. jon.firstName)
        and set they're values as well (e.g. jon.firstName = 'Jon')
*/

//////// CONSTRUCTORS /////////
// A constructor allows us to more easily and efficiently create an instance of a class by enabling us to instantiate the class(create a new instance of the class) and set the properties at the same time.
class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');
console.log(battleship.gameName)

// let battleship: Game = new Game(); // This declaration would throw an error, the two arguments are required


////// INHERITANCE //////

// This is our parent class, it contains properties that are universal to ALL vehichles
class Vehichle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
};

////// SUBCLASS EXAMPLES //////
// EXAMPLE ONE
    class Automobile extends Vehichle {
        isSelfDriving: boolean;
    }

    let myCar: Automobile = new Automobile();
    myCar.isSelfDriving = false;
    myCar.topSpeed = 200;
    myCar.make = 'Volvo';

// EXAMPLE TWO
    class Motorcycle extends Vehichle {
        easyToDoWheelie: boolean;
    };

    let myMotorcycle: Motorcycle = new Motorcycle();
    myMotorcycle.easyToDoWheelie = true;
    myMotorcycle.topSpeed = 180;

//////  PARAMETER PROPERTIES //////
class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers')

class Employee extends Person {
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);

let salaryResult: string = newEmployee.getSalary();
console.log('The salary is:', salaryResult);