/*here is function ::   now we are going to learn how can we  use function and parameter*/
function sayMyNane() {
console.log("V");
console.log("A");
console.log("I");
console.log("B");
console.log("H");
console.log("A");
console.log("V");
}
sayMyNane();

//Addition without passing parameter //
function addNumSub(num4,num3) { 
    console.log(num4+num3)
}

console.log(addNumSub(4,5));


//Addition passsing by parameter //
function addNum (num1,num2) {
    
     let Ans1=num1+num2;   
     return Ans1;
}
let Ans1=addNum(4,8);
console.log(Ans1);
