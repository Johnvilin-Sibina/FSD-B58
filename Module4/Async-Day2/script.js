/*const num = parseInt(prompt("Enter the number"));
const p = new Promise((resolve, reject) => {
  if (num % 2 === 0) {
    resolve("Even Number");
  } else {
    reject("Odd Number");
  }
});
//console.log(p)
p.then((data) => console.log(data)).catch((error) => console.log(error));*/

/*const age = parseInt(prompt("Enter Your Age"));

const eligible = new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("You are eligible to vote")
    }
    else{
        reject("You are not eligible to vote")
    }
})
//console.log(eligible)
eligible.then((data)=>console.log(data)).catch((error)=>console.log(error));*/

//Promise in function
/*function foo(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible to vote");
    } else {
      reject("Not eligible to vote");
    }
  });
}
foo(18)
  .then((ele) => console.log(ele))
  .catch((error) => console.log(error));

function oddEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Even Number");
    } else {
      reject("Odd Number");
    }
  });
}
oddEven(7)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));*/

//Promise Chaining:
/*function add(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 2), 2000);
  });
}
add(2).then((data)=>{
    console.log(data);
    return add(data);
}).then((ele)=>{console.log(ele);
return add(ele)}).catch((error)=>console.log(error))*/

/*function mul(num){
    return new Promise((resolve, reject)=>{
setTimeout(()=>
    resolve(num*2),2000)
})
}
mul(2).then((res1)=>{
console.log(res1)
return mul(res1);
}).then((res2)=>{
    console.log(res2)
    return mul(res2)
}).then((res3)=>{
    console.log(res3)
    return mul(res3);
}).then((res4)=>{
    console.log(res4);
    return mul(res4)
}).catch((error)=>console.log(error));*/

//Promise.all
/*const promise1 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("Promise 1 is resolved"),2000)
    }
    else{
        setTimeout(()=>reject("Promise 1 is rejected"),2000)
    }
})
const promise2 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("Promise 2 is resolved"),2000)
    }
    else{
        setTimeout(()=>reject("Promise 2 is rejected"),2000)
    }
})
const promise3 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("Promise 3 is resolved"),2000)
    }
    else{
        setTimeout(()=>reject("Promise 3 is rejected"),2000)
    }
})
Promise.all([promise1,promise2,promise3]).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))

//Promise.allSettled
const result = Promise.allSettled([promise1,promise2,promise3]).then((data)=>{
    data.forEach((result)=>console.log(result))
})*/

//fetch:
const result = fetch("https://restcountries.com/v3.1/all");
console.log(result);
result.then((data) =>
  data
    .json()
    .then((ele) => {
        for(let i=0;i<ele.length;i++){
            console.log(ele[i].name.common)
        }
    })
    .catch((error) => console.log(error))
);
