//Async without try catch
/*async function foo(){
    const data = await fetch("https://restcountries.com/v3.1/all");
    const res = await data.json();
    console.log(res);
}
foo();*/

//Asynnc in arrow function
/*var a = async() =>{
    const data = await fetch("https://restcountries.com/v3.1/all");
    const res = await data.json();
    console.log(res);
}
a();*/

//Async function with try catch
async function foo(){
    try {
        const data = await fetch("https://restcountries.com/v3.1/all");
        const res = await data.json();
        console.log(res); 
    } catch (error) {
        console.log(error);
    }
}
foo();