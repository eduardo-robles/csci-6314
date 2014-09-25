/*
 * CSCI 6316: Ecommerce 
 * 9-25-14
 * Eduardo Robles 
 * Assignment 3
 */

// variables
var Initial = 2000;
var rate = 0.12;
var deposit = 100;
var age = 50;

/* static information table */
document.writeln('<h3>Future Value Calculation</h3>');
document.writeln('Initial Investment: $'+Initial+'<br/>');
document.writeln('Interest Rate: '+(rate*100)+'%<br/>');
document.writeln('Deposit every 30 days: $'+deposit+'<br/>');
document.writeln('Investment Started: '+age+'<br/>');

/* begin table */
document.writeln('<table class="table table-striped">' );
document.writeln('<tr><th>Age</th>');
document.writeln('<th>Begin Bal.</th>');
document.writeln('<th>Interest</th>');
document.writeln('<th>Deposit</th>');
document.writeln('<th>End Bal.</th></tr>');

/******************** begin function *******************************/
var EndBal, interest;
for ( var currAge=age; currAge<=65; currAge++ ) {
document.writeln('<tr>');
document.writeln('<td class="center">'+currAge+'</td>');
document.writeln('<td class="right">'+Initial.toFixed(2)+'</td>');// beginning balance compounded every month and added up every year

/* loop 'deposit' for each month */
 count = 1;
 var month_dep;
    do{
    month_dep = 12 * deposit;    
        
    }while ( ++count <= 12)
        
/* compute EndBal for each year */
EndBal = Initial * Math.pow((1 + (rate/360)), (360 * (currAge - age))); //<<<FIX THIS!!!    
/* compute interest earned for each year */
interest = EndBal - Initial; //<<<FIXTHIS??


/*********************** end function ******************************/

/* display */
document.writeln('<td class="right">'+interest.toFixed(2)+'</td>');// interest
document.writeln('<td class="center">'+month_dep.toFixed(2)+'</td>');// deposit every month
document.writeln('<td class="right">'+EndBal.toFixed(2)+'</td>');// end balance
document.writeln('</tr>');
Initial = EndBal;// copy the value to the next year
}//end for loop
document.writeln( '</table>' );//end table