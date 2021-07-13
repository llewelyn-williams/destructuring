/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */


// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe); //30 26 27

// Note:    Assign multiple variables in an array to an array
//          in order to assign en masse to the values in the
//          array.


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
}
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia); //designer developer accountant

// Note:    Create mulitple variables from the properties of
//          an object by assigning an object to the list of
//          porperties in cury braces.


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); //english french

// Note:    It is not ncessary to use ALL the elements of an array.
//          Assignment will simply be in order, forgetting the rest.

let [ , , maryNative, marySeconday] = languages;
console.log(maryNative, marySeconday); //spanish german

// Note:    It is also possible to skip elements of an array during
//          assignment by inserting the commas required to have "blanks".

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese"
}
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage); //english german

// Note:    With objects skipping isn't necessay as you can specify
//          by name the properties you want values from.

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let [favourite, secondFavourite, ...others] = fruits; 
console.log(favourite); //apple
console.log(secondFavourite); //orange
console.log(others); //[ 'banana', 'peach', 'cherry' ]

// Note:    Using the rest parameter syntax in the variables list
//          of an array will combine the remining alements of the
//          array into an array.

let favouriteFoods = {
    brian: "pizza", 
    anna: "pasta", 
    sarah: "vegetarian", 
    andrea: "steak"
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian); //pizza
console.log(anna); //pasta
console.log(rest); //{ sarah: 'vegetarian', andrea: 'steak' }

// Note:    Using the rest parameter syntax in the variables list
//          of an object will combine the remining alements of the
//          object into an object itself. This will include the
//          property value pairs as the propery hasn't been spcified.
