/*
 * CSCI 6316: Ecommerce 
 * 9-18-14
 * Eduardo Robles 
 * Assignment 2
 */

/*Variables*/
dollar = 0;
quarterR = 10;
dimeR = 5;
nickelR = 2;

/*User Prompt*/
dollar = window.prompt('Please enter a whole dollar amount:');


/*Logic*/
//find quater rolls
 qrt = dollar / quarterR;
 x = dollar % quarterR;
 
//find dime rolls
 y = x / dimeR;
 z = y % dimeR;
 
//find nickel rolls
b = z % nickelR;
  
//find penny rolls
pennyR = parseInt(b) * 2;
  
/*Output*/
document.write('Amount Entered: ' + dollar + '<br />');
document.write('Quater Rolls:' + parseInt(qrt) + '<br />');
document.write('Dime Rolls:' + parseInt(y) + '<br />');
document.write('Nickel Rolls:' + parseInt(b)+ '<br />');
document.write('Penny Rolls:'  + parseInt(pennyR) + '<br />');
