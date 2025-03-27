let myName="vaibhav"

let mySecondNamme=myName
mySecondNamme="patil"

console.log(myName);
console.log(mySecondNamme);

//here in stack memory we copy element 

let user = {

    name : "vaibhav",
    upi : "vaibhav@ybl",
}

let userTwo = user;
userTwo.upi= "vaibhavpatil@ybl";
console.log(userTwo);

// here in heap memory we give referance 