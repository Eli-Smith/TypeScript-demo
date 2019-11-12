// Types allow us to give our variables a specific data type. Any data type other than the implicit type we give that variable will result in an error
// TYPE DECLARATIONS
// - we must declare what data type our variable will be when we decalre the variable itself
// vanilla JS
// let x = 7;
// x = 'seven';
// typescript
//    1         2           3
var username = 'instructor';
var password = 'password';
var instructorId = 5;
/*
    1.) - We declare a variable

    2.) - declare the data type of the variable

    3.) - Initialized value, must match the data type set in our variable declaration
*/
// we can also declare a value and a type without initializing the variable
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
phoneNumber = 3176257004;
// BASIC TYPES
// NUMBERS
var age = 26;
var currentYear = 2019;
// STRING
var companyName;
companyName = 'Eleven Fifty';
// You can use single or double quotes (just like vanilla JavaScript)
// BOOLEAN
var loggedIn = true;
var isGoldLevelUser = false;
// ARRAYS
var studentList = ['Elijah', 'James', 'Brad', 'Jessica', 'Asia', 'Daniel']; // Most common practice in TypeScript
var allScores = [100, 65, 86, 97, 30, 55];
// same thing as writing 'number[]'
console.log('Student List -', studentList[0]);
// ANY
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// VOID
// a void type has no data type at all - it's basically the complete opposite of the any datat type. This is commonly used for the return types of functions
function sayHelloToAll() {
    console.log('Hello to all!');
}
sayHelloToAll();
// NULL AND UNDEFINED
var undefinedVariable = undefined;
var nullVariable = null;
console.log(undefinedVariable);
console.log(nullVariable);
// TUPLE
// Tuples (TypeScript specific) allow us to create an array with multiple data types. You will only be able to pass in a fixed number of items into the array
// declare a tuple
var userNameAndId;
//initializing
userNameAndId = ['Elijah', 1];
// keep in mind that the values we pass in must be entered in the proper order (in this case a string THEN a number)
//ENUM
// enums allow us to give names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Sword;
console.log(weapon);
// like arrays, enums start at 0, but that starting index can be assigned to a different number
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
// UNION TYPES
// union types allow us more flexibility with our variables, but we still need to declare what types the variable should expect
var x; // Basically saying 'Expect one of these data types'
var y;
x = '1234';
y = 1234;
console.log(typeof x);
console.log(typeof y);
//# sourceMappingURL=01-types.js.map