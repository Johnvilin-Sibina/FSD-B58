// Example for asynchronous function
/*let food;
console.log("Started");
function getFood(){
    console.log("Async going to start");
    setTimeout(()=>{
        food='🍨'
        console.log(food);
    },5000)
   console.log("Async will not wait");
}
getFood();
console.log(`Food ready ${food}`);*/

//Callback Function:
/*console.log("Food is ordered in Swiggy")
function getFood(callback){
setTimeout(()=>{
    const food = '🧀';
    callback(food)
},3000)
}
function foodReady(food){
    console.log(`Food is ready ${food}`);
}
getFood(foodReady)
console.log("Doing other works until food is ready")*/

/*console.log("First");
console.log("Second");
console.log("App has started");
setTimeout(()=>console.log("....Loading"),5000)
setTimeout(()=>console.log("App completed"),8000)
console.log("Building the app");*/

/*const complete = () => {
  console.log("Finish");
};
const add = (callback) => {
  var x = 2;
  var y = 3;
  console.log("Sum: ", x + y);
  callback();
};
add(complete);*/

//Callback Hell or Pain of Callback
// setTimeout(()=>{
//     console.log("5");
//     setTimeout(()=>{
//         console.log("4");
//         setTimeout(()=>{
//             console.log("3");
//             setTimeout(()=>{
//                 console.log("2");
//                 setTimeout(()=>{
//                     console.log("1");
//                     setTimeout(()=>{
//                         console.log("Welcome to Async Programming")
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

const span = document.createElement("span");

setTimeout(() => {
  span.innerrHTML = "Countdown: 10";
  setTimeout(() => {
    span.innerHTML = "Countdown: 9";
    setTimeout(() => {
      span.innerHTML = "Countdown: 8";
      setTimeout(() => {
        span.innerHTML = "Countdown: 7";
      setTimeout(() => {
        span.innerHTML = "Countdown: 6";
        setTimeout(() => {
          span.innerHTML = "Countdown: 5";
          setTimeout(() => {
            span.innerHTML = "Countdown: 4";
            setTimeout(() => {
              span.innerHTML = "Countdown: 3";
              setTimeout(() => {
                span.innerHTML = "Countdown: 2";
                setTimeout(() => {
                  span.innerHTML = "Countdown: 1";
                  setTimeout(() => 
                    span.innerHTML = "Happy Independence Day", 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
},1000);
 document.body.append(span);