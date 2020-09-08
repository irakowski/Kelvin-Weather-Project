//Taking user input to provide temperature in Kelvin. Since return value is a string, we are casting all to number
var kelvinTemp = Number(prompt('Temperature in Kelvin: '));

//checking if input Not a Number. syntax: isNaN(value)
if (isNaN(kelvinTemp)) {
    console.log('Doesn\'t look like it was a number');
} else {
    // Converting provided temp to the Celsius and rounding up to largest integer less than or equal to 'input'.
    //CELSIUS
    var celsiusTemp = Math.floor(kelvinTemp - 273.15);
    //printing up to the console using string interpolation
    console.log(`${kelvinTemp} kelvin is about ${celsiusTemp} degrees Celsius`);
    //FAHRENHEIT
    // converting Temp to Fahrenheit and rouding to the largest integer less than or equal to 'input'
    var fahrenheitTemp = Math.floor(celsiusTemp * (9/5) + 32);
    //printing up result to the console using string interpolation
    console.log(`${kelvinTemp} kelvin is about ${fahrenheitTemp} degrees Fahrenheit`);
    }
