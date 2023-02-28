//Assignment no 10//
//Problem no 1//
/*document.write(5>4);True
document.write('apple'>'pineapple');False
document.write("2">"12");True
document.write(undefined == null);true
document.write(undefined===null);false
document.write(null == "\n0\n");false
document.write(null === +"\n0\n");false*/

//Problem no 2//
/*let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?*/
/*c=a++;
c=a+1;
c=2;
d=b++;
d=b+1;
d=2;*/

//prolem no 3//
/*What are the values of a and x after the code below?
let a = 2;
//let x = 1 + (a *= 2);
document.write(1+(a*=2));
a=2;
x=5;*/



//problem no 4//
/*5-Here’s a code that asks the user for two numbers and shows their sum.
It works incorrectly. The output in the example below is 12 (for default prompt values).
Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12*/

//correct function is//
/*let a = parseFloat(prompt('Enter First Number'))
let b = parseFloat(prompt('Enter Second Number'))
alert(a + b);*/



//Problem no 5//

/*6- Rewrite this if using the conditional operator '?':
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/
/*let a = 2;
let b = 3;
let c =(a+b>4) ? 'Below' : 'Over';
alert(c);*/

//problem no 6//
/*
Rewrite 'if..else' into '?'
Rewrite if..else using multiple ternary operators '?'.
For readability, it’s recommended to split the code into multiple lines.
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';*/
/*let login = prompt('Enter your name');
let message = login=='employee' ? 'Hello' : login =='director' ? 'greetings' : login==''? 'no login' : '';
alert(message);*/
 

//problem no 7//
/*alert( null || 2 || undefined );
Final result of the expression is 2.*/



//Problem no 8//
/*What will the code below output?

alert( alert(1) || 2 || alert(3) );
The code will output 1 and then 2.*/



//Problem no 9//

/*alert( 1 && null && 2 );
The code will output null.*/


//problem no 10//
/*What will this code show?

alert( alert(1) && alert(2) );
The code will first display an alert box with the value 1, and then display undefined.*/    


//Problem no 11//
/*What will the result be?

alert( null || 2 && 3 || 4 );
The code will output 3.*/

//Problem no 12//
/*Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.*/
/*
var age = 13;
if(!(age >= 14 && age <= 90)){
alert('age is not between 14 to 90');
}else{
    alert('age is between 14 to 90');
}*/

/*var age = 15;
if((age >= 14 && age <= 90)){
alert('age is  between 14 to 90');
}else{
    alert('age is not between 14 to 90');
}*/

//Problem no 13//
/*Which of these alerts are going to execute?
What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
The first and third alerts will execute, but the second one will not.*/


//Problem no 14//

/*var browser = prompt('Enter browser name');
if (browser==='edge'){
    alert("You have got the edge");
}else if(browser==='chrome' || browser==='firefox' || browser==='safari' || browser==='opera'){
    alert('okay we support these browser too');
}else{
    alert('we hope that this page look ok!');
}*/


//Problem no 15//

/*let a = +prompt('a?', '');
switch(a){
    case 0:alert(0);
    break;
    case 1: alert(1);
    break;
    case 2:
    case 3: alert(2,3);
    break;
    default:
        alert("no");
}*/



