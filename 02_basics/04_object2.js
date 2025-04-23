//const tinderuser= new Object();  //it was a singleton obj //
const tinderuser={

}
 console.log(tinderuser);

 tinderuser.id="142abs";
 tinderuser.name="vaibhav"
 tinderuser.mail="vbp@gmail.com"
  
 //console.log(tinderuser);


 // nested objects 
 const newuser1={
    email:"onnnnnnnnn.com",

    FullName: {
        userfullname:{

            name:"vaibhav",
            lastName:"patil",
    }
 }
}


 console.log(newuser1.FullName.userfullname.name);
 
 const newuser02={
    FullName: {
        userfullname:{

            name:"vaibhav",
            lastName:"patil",
    }
 }
}
 /*if we  have to store obj1 and obj2 in  obj 3 then we need  spred operator .. and there is also one method called assign but in 90 
   percent of the cases we use spred operator */
   
  // obj3.a
const obj3={...newuser02,...newuser1}
console.log(obj3);

// object Destructuring

const course={

    name:"Reactjs",
    price:"710",
    writenby:"vaibhav patil",
}
//here is simplest exaple of obj destructuring //
const {price:p,writenby}=course;
console.log(p);

//here:: json how to declare json and how to use it  json declare=={}//

//{
    //"name":"vaibhav",
   // "age":"20",
   // "lastName":"patil"
//}
 