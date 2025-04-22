console.log("Declaration type")
const myArr=[10, 20, 30, 40, 50]
console.log(myArr);

//Declaration types//

const myArr1 = new Array(1,2,3,4)
console.log(myArr1);

//Array Method//
console.log("Arrays method"+"::push,pop"+"::unshift,shift")
myArr.push(47);
console.log(myArr);

myArr.pop();
console.log(myArr);

//shift and unshift//

myArr.unshift(1);
console.log(myArr);
myArr.shift();
console.log(myArr);

const newArr= myArr.join();
console.log(newArr);// Array convert into String//
console.log(myArr);
