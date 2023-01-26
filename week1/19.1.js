// default paramater ->allow named parameter to be intialized with default values if no value or undefined is passed

/* function addtwonumber(n1,n2) {
 return n1+n2
 };
console.log(addtwonumber(5,6));*/

// 2nd method 
/* let addtwonumber = (n1,n2) =>  n1+n2;
 console.log(addtwonumber(5,6)); */

// 3rd method
/*let addtwonumber = (n1,n2) => {
  console.log(n1)
  console.log(n2)
  return n1+n2
} 
console.log(addtwonumber(5,6));*/

// rest and spread operator are applicable in array and object in js

let a = [3,4,5,6,7,8]
let newa = [... a]
 //  spread ->  (..) allows us to quickly copy all or part of an existing array or object into another array or object
console.log(a)
console.log(...a)

// REST -> (...) used to put the rest of some specific user-supplied values into js array.
let maxofnumbers = (...numbers) =>{
  console.log(numbers);
}
maxofnumbers(1,2,3,5,5,657,8,9,7);

// OBJECT
let object = {
  name: "nidhi",
  age: 20,
  city: "Patna",
  address: {
    state: "Bihar"
  }
};
let object2 = {...object, country: "India", fvrtcolor: "Black"}
object2.address.city = "jalandhar"
console.log(object2)
console.log(object)
