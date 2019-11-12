var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    // Adding a method to our class
    // Methods in our class do not require the function keyword
    Person.prototype.sayHello = function () {
        // this.firstName will point to a specific instance of our Person class
        // not just a generic message
        console.log('Hello', this.firstName);
    };
    Person.prototype.helloFullName = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
// Creating a new Person
var kenn = new Person();
// Using . notation to set the value of kenn.firstName
kenn.firstName = 'Kenn';
// Using . notation to call on the method nested within our class
// In this instance this.firstName will look at the value of firstName in the kenn instance of our Person
// The method will console.log 'Hello Kenn'
kenn.sayHello();
var sheriff = new Person();
sheriff.firstName = 'Sheriff';
sheriff.lastName = 'Holler';
sheriff.helloFullName();
var phil = new Person();
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
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
console.log(battleship.gameName);
// let battleship: Game = new Game(); // This declaration would throw an error, the two arguments are required
////// INHERITANCE //////
// This is our parent class, it contains properties that are universal to ALL vehichles
var Vehichle = /** @class */ (function () {
    function Vehichle() {
    }
    return Vehichle;
}());
;
////// SUBCLASS EXAMPLES //////
// EXAMPLE ONE
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehichle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Volvo';
// EXAMPLE TWO
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehichle));
;
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
//////  PARAMETER PROPERTIES //////
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
var salaryResult = newEmployee.getSalary();
console.log('The salary is:', salaryResult);
//# sourceMappingURL=03-classes.js.map