console.log("Operator:");
console.log("1. Addition(+)");
console.log("2. Subtraction(-)");
console.log("3. Multiplication(*)");
console.log("4. Division(/)");
const operator = prompt("Please select operator above: ");
const number1 = Number(prompt("Enter first number: "));
const number2 = Number(prompt("Enter second number: "));
let result;
switch(operator){
    case "1": result = number1 + number2; break;
    case "2": result = number1 - number2; break;
    case "3": result = number1 * number2; break;
    case "4": result = number1 / number2; break;
    default: result = "You did not choose correct operator, please try again!";
}
console.log(result);