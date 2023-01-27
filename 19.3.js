// promise is a class in js
// constructor (function)
// let promise = new Promise((fulfilled, notfulfilled) =>{
//   let n1 =10
//   let n2 =15
//   let sum = n1+n2
//   if(sum > 20) {
//     fulfilled()
//   } else {
//     notfulfilled()
//   }
// })
// mypromise
//   .then(() => {
//     console.log("promise was fulfilled")
//   })
// .catch(() => {
//   console.log("promise is not fulfilled")
// })


function addtwonumber(n1,n2) {
    let sum =0
    setTimeout(() => {
      console.log(n1+n2)
      sum = n1+n2
    }, 5000)
    console.log("inside addtwonumbers")
    return sum
  }
  console.log(addtwonumber(2,3))