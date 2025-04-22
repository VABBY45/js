//what is singleton-
//learn object declaration 
//it was object literal
const mysym=Symbol("key1");
const jsuser={

    name:"vaibhav",
    mysym:mysym,
    Age: 24,
    email:"vaibhavpatil09112001@gmail.com",
    islogin:"false",
    lastlogin:["monday","sunday"]
};

console.log(jsuser.mysym);
console.log(jsuser.name);

// how to change value 
jsuser.email="vaibhavpatil09112001@amezon.com" ;
console.log(jsuser.email);

// how to freez object values

//Object.freeze(jsuser);  // now here are freez the valUE OF OBJECT \\
 jsuser.name="yash patil";
 console.log(jsuser.name);  // if we run this code still its no gona change \\

 // now here are code  how to declare function //

 jsuser.greetings=function(){
    console.log("Hellow js user," );
 }
 console.log(jsuser.greetings())

 jsuser.greetings2=function(){
    console.log(`Hellow js user, ${this.name}`)
 }
 console.log(jsuser.greetings2());
