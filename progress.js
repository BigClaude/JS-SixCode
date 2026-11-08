
//function
//function msg(){

   // alert("hello here I an new to Java Script");
//}
 //alert(msg());
 //alert(confirm());
 //const  doc=document.querySelector('h1');
 //console.log(h1.textContent);
 //h1.textContent="Helo Rwanda";
 // function to retrun 17
/*  function add7(num){
    
    return num+=7;

 }
alert(add7(10));
//function to retrun multplication of 2 numbers
 function mult7(n1,n2){

    return n1*n2;
 }
alert(mult7(3,2))
//function to chane from upcase to lowerCae and vise versa

function capitalize(name){
    
 return name;
}
alert(capitalize("abcd" ,str[0].toUpperCase()));
alert("Puzz fuzz Program");*/

let answer = parseInt(prompt("Please enter the number : "));

let output="";
for(let i = 1;i<= answer;i++){
if(i % 3 === 0){
    output += "fizz<br>";
}
else if(i % 5 === 0){
    output +="buzz<br>";
}
else if(i % 3 === 0 && i % 5 === 0){
    output +="FizzBuzz<br>";
}
else{
    output += i + "<br>";
}
}
document.getElementById("result").innerHTML=output;