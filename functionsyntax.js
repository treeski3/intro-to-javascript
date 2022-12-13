//function syntax

function functionName () {
    functionBody;
}

//calling a function

functionName();

//functions with parameters

function functionName(param 1, param 2) {
    functionBody(param 1 + param 2);
}

//default parameter

function functionName(param = 'noparam') {
    functionBody(`If no parameter is specified the function will use ${param} as default.`);
}

//use 'return' keyword to get result of function evaluation, otherwise the value is undefined.

function functionName() {
    var result = functionBody();
    return result;
}

//can use Helper functions, or functions within functions

function function1(param1) {
    return param1 *10;
};
function function2(param2) {
    return function1(param2) *2;
}
function2(5);  //returns 100

//anonymous function can be called within an expression, called a function expression

const multiplyTwoParam = function(param1, param2) {
    const multiply = param1 * param2;
    return multiply;
}
console.log(multiplyTwoParam(10,5));

//arrow syntax can be used to shorten the expression

const multiplyTwoParam = (param1, param2) => {
    return param1 * param2;
}

//can further shorten expression using concise body arrow syntax
    //no curly brackets needed for one parameter function

const squareParam = param => {
    return param * param;
}

    //can remove curly brackets from one line code block, return is implicit

const squareParam = param => param * param;
