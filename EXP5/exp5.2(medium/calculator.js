const mathUtils = require("./mathUtils");
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <operation> <number1> <number2>");
    console.log("Operations: add, subtract, multiply, divide");
    process.exit();
}
let result;
switch (operation.toLowerCase()) {
    case "add":
        result = mathUtils.add(num1, num2);
        break;

    case "subtract":
        result = mathUtils.subtract(num1, num2);
        break;

    case "multiply":
        result = mathUtils.multiply(num1, num2);
        break;

    case "divide":
        result = mathUtils.divide(num1, num2);
        break;

    default:
        result = "Invalid operation";
}
console.log("Result:", result);