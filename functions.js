//1.no paramater no return

// global variables
let n1=30;
let n3=50;
//function definitions
function add(){
let sum;//local variable to hold the result
sum=n1+n3;
console.log(sum); //function calling
}
add();

/* 3.function with parameters(input) but no retern value 
=======================================================*/

//calcualting area of a circle
let r=4.5;
const Pi=3.14;       //Global functions
//function declaration
function AreaofCircle(){
    let area;                   //local variable
    area=r*r*Pi;             //assing value to local variable area
    return area;            //output the value of arrea/but not on console
}
//creating a new varaible that will hold the function call
let result=AreaofCircle();  // function calling
console.log("The area of circle is:"+result+"cm2");       //display result to console

/* 3.function with parameters(input) but no retern value 
=======================================================*/

//Employee bonus calculation example
 let name="Paul";

function EmployeeBonus( salary,bonus){   //function decraltion with paramters
    let sol; // local variable variable to hold the result
    sol=salary*bonus;
    console.log("hi " +name+" Your bonus is:"+sol);  //output
}
//function calling method1
EmployeeBonus(450000,0.2);      // passing value to parameters salary,and bonus
//function calling method2
let sal=450000;
let bon=0.2;
EmployeeBonus(sal,bon);  //passing value to paramaters salary,bonus
