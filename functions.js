//1.no paramater no return

// global variables
let n1=30;
let n3=50;
//function definitions
function add(){
let sum;//local variable
sum=n1+n3;
console.log(sum); //function calling
}
add();

//2.function with no paramaters(input) with retun value(output)

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

