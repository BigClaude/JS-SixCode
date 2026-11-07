/* 1.function Declaration 
   2.Function Expression
    3.Arrow function
    4.IIFE function
     */
/* 1.Function declaration: standway of define a function */
//example:

function totalMarks(math,comp,ict){ //decalarion of a function with start with function keyword
 let sum=math+comp+ict;    //function boddy
 return sum;   //retrun value of function
}
console.log(totalMarks(50,70,50)); //function calling
/* 2.function expression :means function is initilized to a variale*/
//Example:
 let marks=function totalMark(math,comp,ict){

    let sum=math+comp+ict;
    return sum;
 }
console.log(marks(50,70,60));

/* 3.arrow function:uses arrow(=> and always start with a paranthese see the example) */
//example1: when arrow function has mmultiple line in body section
let mark2= (math,comp,ict)=>{

    let sum=math+comp+ict;
    return sum;
 }
console.log(mark2(50,80,60));
//example2: when arrow function has only one line in body section
let mark3= (math,comp,ict)=> math+comp+ict;{

    //return math+comp+ict;//this return will be removed
    
 }
console.log(mark3(60,80,60));
/* 4. IIFE=immediatly Invoked Function Excecution
:this those not have a function name and no variable name but uses parantehses see the examples
*/
//example:

(function(math,comp,ict)  //(function() { ... }) – wraps the function in parentheses.
{
let sum=math+comp+ict;
console.log(sum)}) //function exceute immediatly
(50,10,20); // (50, 10, 20) – passes the arguments.


