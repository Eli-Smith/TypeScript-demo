// Types allow us to give our variables a specific data type. Any data type other than the implicit type we give that variable will result in an error

// TYPE DECLARATIONS
// - we must declare what data type our variable will be when we decalre the variable itself

// vanilla JS
// let x = 7;
// x = 'seven';

// typescript
//    1         2           3
let username: string = 'instructor';
let password: string = 'password';
let instructorId: number = 5;
/* 
    1.) - We declare a variable

    2.) - declare the data type of the variable

    3.) - Initialized value, must match the data type set in our variable declaration
*/
 
// we can also declare a value and a type without initializing the variable

let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

phoneNumber = 3176257004;

// BASIC TYPES

// NUMBERS
let age: number = 26;
let currentYear: number = 2019;

// STRING
let companyName: string;
companyName = 'Eleven Fifty';
// You can use single or double quotes (just like vanilla JavaScript)

// BOOLEAN
let loggedIn: boolean = true;
let isGoldLevelUser: boolean = false;

// ARRAYS
let studentList: string[] = ['Elijah', 'James', 'Brad', 'Jessica', 'Asia', 'Daniel']; // Most common practice in TypeScript

let allScores: Array<number> = [100, 65, 86, 97, 30, 55];
// same thing as writing 'number[]'

console.log('Student List -', studentList[0]);

// ANY
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

// VOID
// a void type has no data type at all - it's basically the complete opposite of the any datat type. This is commonly used for the return types of functions

function sayHelloToAll() : void {
    console.log('Hello to all!');
}

sayHelloToAll();

// NULL AND UNDEFINED
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

console.log(undefinedVariable);
console.log(nullVariable);

// TUPLE
// Tuples (TypeScript specific) allow us to create an array with multiple data types. You will only be able to pass in a fixed number of items into the array

// declare a tuple
let userNameAndId: [string, number];
//initializing
userNameAndId = ['Elijah', 1];

// keep in mind that the values we pass in must be entered in the proper order (in this case a string THEN a number)

//ENUM
// enums allow us to give names to numeric values

enum WeaponType {Sword, Saber, Spear};
let weapon: WeaponType = WeaponType.Sword;

console.log(weapon);

// like arrays, enums start at 0, but that starting index can be assigned to a different number
enum CardType {Ace = 1, Two, Three, Four}
let cardType: string = CardType[2];

console.log(cardType);

// UNION TYPES
// union types allow us more flexibility with our variables, but we still need to declare what types the variable should expect

let x : number | string | boolean; // Basically saying 'Expect one of these data types'
let y: number | null;

x = '1234';
y = 1234;

console.log(typeof x);
console.log(typeof y);