const marvelHero=["THOR","LOKI","HULK"];
console.log(marvelHero);
const dcHero=["batman","superman","flash"];
console.log(dcHero);

marvelHero.push(dcHero);
console.log(marvelHero);

marvelHero.concat(dcHero);
console.log("concat valuse"+marvelHero)

//spread operator 
const allnewHero= [...dcHero,...marvelHero];
console.log(allnewHero);

//flat

const realArray=[1,4,65,[4,5,8,[4,5,81,4,7,5]]];
const narr=realArray.flat(2);
console.log(narr);
