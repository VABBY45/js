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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// it is spread operator that is used for collect multipale argument and print in array format 
function bucketAddList(...obj) {
    return obj;
    
}
console.log(bucketAddList(44,55,44,77,88,22));

//here is an exaple of object how to pass in function using return //

const user={
    name:"vaibhav",
    lastname:"patil"
}

function passingObject(human) {
    return human;
} 

console.log(passingObject(user))


//here is an exaple of object how to pass in function using console.log //


const user2={
    name:"vaibhav",
    lastname:"patil"
}

function passingObject(human2) {
    console.log(`my last name is ${human2.lastname} ans first name is ${human2.name}`)
} 
passingObject(user2);

//now we are going to add  array in function //

const myArray=[55,22,33,44,66,99,88,77,1,2,0,5,8,93,4,8520,741,85296,7415]

function mynewarrayfunction(bamboo) {
    return bamboo[5];
}
console.log(mynewarrayfunction(myArray))