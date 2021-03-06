/*
 * CSCI 6316: Ecommerce 
 * 9-25-14
 * Eduardo Robles 
 * Assignment 3
 */

/* variables */
   BegBal = 2000;
   interest = 0;
   EndBal = BegBal;
   dep = 0;

/* static information table */
document.writeln('<h3>Future Value Calculation</h3>');
document.writeln('Initial Investment: $'+BegBal+'<br/>');
document.writeln('Interest Rate: '+12+'%<br/>');
document.writeln('Deposit every 30 days: $'+100+'<br/>');
document.writeln('Investment Started: '+50+'<br/>');

/* begin table */
document.writeln('<table class="table table-striped">' );
document.writeln('<tr><th>Age</th>');
document.writeln('<th>Begin Bal.</th>');
document.writeln('<th>Interest</th>');
document.writeln('<th>Deposit</th>');
document.writeln('<th>End Bal.</th></tr>');

/******************** begin function *******************************/

for(age = 51; age <= 65; age++){ 
   total_interest = 0;
   dep = 0;
   
   for(m=0 ; m <12 ; m++)
   {
	   	 EndBal = EndBal + interest + 100;
		     interest = EndBal*(.12/12);
			 total_interest += interest;
			dep+=100;
    }
   

/*********************** end function ******************************/

/* display */
document.writeln('<td class="right">'+age+'</td>');
document.writeln('<td class="right">'+BegBal.toFixed(2)+'</td>');
document.writeln('<td class="right">'+total_interest.toFixed(2)+'</td>');// interest
document.writeln('<td class="center">'+dep.toFixed(2)+'</td>');// deposit every month
document.writeln('<td class="right">'+EndBal.toFixed(2)+'</td>');// end balance
document.writeln('</tr>');
BegBal = EndBal;// copy EndBal to the next year

}//end for loop
document.writeln( '</table>' );//end table
