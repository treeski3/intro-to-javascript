/forecast for today in kelvin
const kelvin = 0; 
//forecast in Celsius
let celsius = kelvin - 273; 
//forecast in Fahrenheit
let farenheit = celsius * (9/5) + 32;
//rounding farenheit
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`)