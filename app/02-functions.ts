//  FUNCTIONS IN TYPESCRIPT //

// VANILLA JAVASCRIPT EXAMPLE
    // All 3 functions will work, even changing the argument type from number to string ( 1 and 2 ) and even adding arguments that weren't originally declared ( 3 )
    // Typescript offers us ways to add constraints to our functions
// function demoFunction(someNum){
//     return someNum;
// }

// demoFunction(1); //1
// demoFunction("stuff"); //2
// demoFunction(1, "Stuff"); // 3

// TYPESCRIPT FUNCTION

function addNumbers(numOne: number, numTwo: number){
    console.log(numOne + numTwo)
    return numOne + numTwo;
}

// Works as intended
addNumbers(1,2);

// Breaks, too many arguments and a string argument whose data type was never declared
// addNumbers(1,2,3);
// addNumbers(1,2,3,'foo');

function fullName( firstName: string, lastName: string){
    console.log( firstName + ' ' + lastName);
    return firstName + lastName;
}

fullName('Elijah', 'Smith');

function sayHello(name: string) : string {
    console.log(name)
    return name;
};

sayHello('Kenn');
// sayHello(1);

function provideBoolean( username: string, password: string) : boolean {
    if(username === 'elevenfiftyuser' && password === 'letmein1234!'){
        return true
    } else {
        return false
    }
}

provideBoolean('Username', 'Password');

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString);
    return numOne + numTwo;
}

addNumbersWithOptional(1,2);
addNumbersWithOptional(1,2,'This is optional');

function completeName(first: string, last: string, middle?: string) : string {
    console.log(middle);
    if(middle){
        return first + middle + last
    } else {
        return first + last
    }
};

completeName('Elijah', 'Smith', 'Aaron');
completeName('Regina', 'Spektor')