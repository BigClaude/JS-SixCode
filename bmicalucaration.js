//importing a libary readdLine
const readLine=require("readline");
const readdLine=readLine.createInterface({

    input:process.stdin,
    output:process.stdout
});

readdLine.question("Enter Heigh and Mass",Function(m,y))

//function to calculatr bmi
function bmical(mass,heigh){
       return mass/(heigh*heigh);
    //return bmical();
}
let result=bmical(67,1.70);
console.log(result);
if(result<=0){
    console.log("Invalid mass or Height");
}
else if(result>=18 && result<=23){
    console.log("Your Nomal:");

}
else if(result>23 && result <=29.5){
    console.log("Obesity");
}
else if(result >=30){

    console.log("Emergency");
}