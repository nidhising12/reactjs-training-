//  1.  .map() -> 1. create a new array from calling a function for every element.
// 2. calls a function once for each element in an array
// 3. does not change the original array
/*let a = [2,3,4,5,6]
let newa = []
for(let i = 0; i<a.length; i++)
  {
    newa[i] = a[i] *a[i]
  }
console.log(newa)*/

// const { lookup } = require("dns");

/*
let a =[3,4,6,7,8,9]
function fnmap(element) {
  return element* element
}

let newa = a.map(fnmap) //it take functional parameter
console.log(newa)*/


/*let a = [4,5,6,7,8]
let newa = a.map((element,index) =>{
  console.log(index)
    return element * element
})
console.log(newa)*/

// FOR EACH lookup
/*let a = [2,3,5,6,8,96]
a.forEach((element, index) => {
  element *= element
  console.log(element)
})
console.log(a)*/

//2 .FILTER()
/*let a = [3,5,6,7,8]
let newa = a.filter((element) => element >= 7)
console.log(newa)*/

// 3. FIND()
/*let a = [20,34,54,56,67,78]
let temp = a.find((value) => {
  return value > 20;
});
console.log(temp);*/

// // 4. .sort()
// let a =[34,45,"56",67,8,89];
// let sorted = a.sort();
// console.log(sorted);
// let array= [20,40,10,70,50,25,111]
// let sortedArray=array.sort((el1,el2)=>{
//      el1=Number(el1);
//      el2=Number(el2);
//     return el1-el2;
// }) 
//   console.log(sortedArray);

//  DEFAULT PARAMETER--
 // OBJECT DESTRUCTING
// let details = {
//   name: "nidhi",
//   age: 24,
//   address: {
//     street: "ashok nagar",
//     city: "patna",
//     state: "Bihar",
//     country: "India",
//     passport: {
//       passportno: "ABCD1234",
//     },
//   },
// },
// console.log(details);


// let obj1 = {name: "nidhi" , age: 24};
// let obj2 = {name: "nidhi"};
// function areequal(obj1,obj2) {
//   if(obj1 == obj2) {
//     return true;
//   }
// if(Object.keys(obj1).length != Object.keys(obj2).length) {
//   return false;
//  }
//   for(let key of Object.keys(obj1)) {
//     if(typeof obj2.[key] == "undefined") {
//       return false;
//     }
//    if (obj2[key] !== obj1[key]) {
//      return false;
//    }
//   }
//   return true;
// }

// console.log(areequal(obj1, obj2))

// MAP AND SET 
// let map = new Map()
// map.set (1, "nidhi")
// map.set(2, "singh")
// console.log(map)

// SET
// let set = new set()
// set.add(1)
// set.add(-1)

// console.log(set)

// class
class Animal {
    nooflegs;
    color;
    family;
    sound;
    constructor(nooflegs,color,family,sound) {
      this.nooflegs = nooflegs;
      this.color = color;
      this.family = family;
      this.sound = sound;
      
    }
  }
  
  let animal = new Animal(4, "brown", "rodent" , "something")
  console.log(animal)