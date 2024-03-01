
// Task 1: Calculate Square with Arrow Functions
// Using arrow functions, create a function that calculates the square of a given
// number and logs the result to the console.
const square = (x)=>{
    console.log(`Square of ${x} is ${x*x}`);
}
square(10)
// Task 2: Create a Welcome Message with Template Literals
// Craft a welcome message using template literals, including the name and age of
// a person.

const welcomeFunc = (name,age) =>{
    console.log(`Welcome! ${name} , you are ${age} years old`);
}
welcomeFunc("OneCodeCamp", 1)
// Task 3: Extract First and Last Name with Destructuring
// Utilize destructuring to extract the first and last name from a person object and
// log them to the console.

const sampleObj = {
    fistName : "OneCodeCamp",
    lastName : "BackEnd AU 01",
}
const {fistName,lastName} = sampleObj
console.log(fistName,lastName)
// Task 4: Merge Arrays with Spread Operator
// Employ the spread operator to merge two arrays into a single array.

const firstArray = [1,2,3];
const secondArray = [3,4,5];
const mergeArray = [...firstArray,...secondArray];

console.log(`[${firstArray}] merge with [${secondArray}] ->`,mergeArray)

// Task 5: Rectangle Area with Default Parameters
// Create a function that calculates the area of a rectangle using default
// parameters.

const calRectangleArea = (length=1,width=2)=>{
    console.log(`Area of rectangle ${length} x ${width} is `,length*width);
}
calRectangleArea(10,3)
calRectangleArea(2,)
// Task 6: Class "Person" with Introduction Method
// Define a class called "Person" with properties for name and age, and a method
// to introduce the person. Instantiate an object of the class and call the introduce
// method.
const person = {
    name: "OneCodeCamp",
    age: "Back End AU 01",
    introduce(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
person.introduce();