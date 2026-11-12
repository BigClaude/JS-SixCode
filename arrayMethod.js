/* Array could have more operations suchs:

unshif()=Add elemen at the beggining
push()= add element at the the end 
pop()= remove element at the begining
shift= remove element from the  the end
Splice().its always combined with 3 arguments like:
splice(statindgIndex,deletecount,items)
*/
let arrys=[200,500,600,800,1000];
//display orginal arraylist
console.log(arrys);
// add element at the end of the array
arrys.push(5000);
console.log(arrys);
//add elemrnt at the beginning
arrys.unshift(25);
console.log(arrys);
//removing the last element
let remo =arrys.pop();
console.log(remo);
//remove the firts element
let frst=arrys.shift();
console.log(frst);
// creating new array
fruitList=["Mango","Banana","apple","Ananas"];
console.log(fruitList);
//lemove 2  items
fruitList.splice(1,2);
console.log(fruitList);