const car = {type:"Honda", model:"500", color:"white"};

//change properties
car.color = "red";

//add a property 
car.owner = "Suraj";

//console.log(car);

//Operators 
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
//console.log(result);


let num1 = 8;
let num2 = 5;
let total = num1 < num2;
//console.log(total);


//function 
let x = myFunction(5,10);
function myFunction(a,b){
    return a*b;
};
//console.log(x);



//Function use to calculate the temprature 
let value = toCelsius(77);
function toCelsius(f){
    return (5/9) * (f-32);
};
console.log(value);