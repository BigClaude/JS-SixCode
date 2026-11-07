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
    area=r*r*Pi;             //assining value to local variable area
    return area;            //output the value of arrea/but not on console
}
//creating a new varaible that will hold the function call
let result=AreaofCircle();  // function calling
console.log("The area of circle is:"+result+"cm2");       //display result to console

/* 3.function with parameters(input) but no return value 
=======================================================*/

//Employee bonus calculation example
 let name="Paul";

function EmployeeBonus( salary,bonus){   //function decraltion with paramters
    let sol; // local variable variable to hold the result
    sol=salary*bonus;
    console.log("hi " +name+" Your bonus is:"+sol);  //output
}
//function calling method1
EmployeeBonus(450000,0.2);      // passing value to parameters salary,and bonus respectively
//function calling method2
let sal=450000;
let bon=0.2;
EmployeeBonus(sal,bon);  //passing value to paramaters salary,bonus


/* 4.function with parameters with return 
========================================= */
//bmi calcluation eas examples(BMI=m/hXh)

//function declaration with paramters
let names= "Rwaka";
function bmiCalculation(mass ,height){
let bmi;
bmi=mass/(h*h);
return bmi; //return value from function (the output of a function )

}
let m=85;
let h=2.75
let bmiResult;// this varible will hold the result retun from a function

bmiResult=bmiCalculation(m,h); //passing values(85,2.75 )to parameters(mass,heigh respectively)
console.log("\n Hi "+names+"  Your bmi is: "+bmiResult.toFixed(2)); //toFixed is used to rounding number 