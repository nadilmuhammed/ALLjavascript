// document.write("hello world")




// quadratic equation
// let root1,root2;
// let realpart,imgpart;

// let a=prompt("Enter the first number");
// let b=prompt("Enter the second number");
// let c=prompt("Enter the third number");

// wholeroot=b*b-4*a*c;

// if (wholeroot>0) {
//     root1=-b + Math.sqrt(wholeroot) / (2*a);
//     root2=-b - Math.sqrt(wholeroot) / (2*a);
//     alert(`The roots of quadratic equations are ${root1} and ${root2}`);
// }else if (wholeroot == 0) {
//     root1 = root2 = -b / (2*a);
//     alert(`The roots of quadratic equations are ${root1} and ${root2}`);
// }
// else{
//     realpart = (-b / (2*a)).toFixed(2);
//     imgpart = (Math.sqrt(-wholeroot) / (2*a)).toFixed(2);
//     alert(`The roots of quadratic equations are ${realpart} + ${imgpart}i and ${realpart} - ${imgpart}i`);
// }




// Kilometr to miles
// let kilometer = prompt("Enter a value of kilometer");

// let factor = 0.621371;

// let miles = kilometer * factor;

// alert(`${kilometer} kilometer is equal to ${miles} miles`);




// Celsuis to farenheit
// let celsuis = prompt("Enter a value of celsuis");
// let farenheit = (celsuis * 1.8) + 32;
// console.log(`${celsuis} celsuis is equal to ${farenheit} farenheit`);
// alert(`${celsuis} celsuis is equal to ${farenheit} farenheit`)




// Random number
// let a = Math.random();
// console.log(a);




// check whether a number is positive, negative or zero
// let number = parseInt(prompt("Enter a number:"));
// if (number>0) {
//     alert(`${number} is positive`)
// }else if(number == 0){
//     alert(`${number} is equal to zero`)
// }else{
//     alert(`${number} is negative`)
// }




// odd or even
// let number = parseInt(prompt("Enter a number"));
// if(number % 2 === 0){
//     alert("The number is even")
// }else{
//     alert("The number is odd")
// }




// largest among three numbers
let a,b,c;
a = parseInt(prompt("Enter the first number"));
b = parseInt(prompt("Enter the second number"));
c = parseInt(prompt("Enter the third number"));

let largest = Math.max(a,b,c)

alert(`The largest of ${a},${b},${c} is `+largest)
