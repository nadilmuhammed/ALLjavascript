// var num1, num2;
// num1 = window.prompt("Input the first number");
// num2 = window.prompt("Input the second number");

// if (parseInt(num1)>parseInt(num2)) {
//     alert("the largest of "+num1+ "and "+num2+ "is "+num1);
// }else if (parseInt(num2)>parseInt(num1)) {
//    alert("the largest of "+num1+ "and "+num2+ "is "+num2);
// }else{
//    alert("Both values are equal");
// }



// Print 0 to 15 and display weather it is odd or even
// for (let x = 0;x<=15;x++) {
//     if (x === 0) {
//         console.log(x+ "  is even")
//     }else if (x%2 === 0) {
//         console.log(x+ "  is even")
//     }else{
//         console.log(x+" is odd")
//     }
// }

var sum=0;
for (let x = 0;x < 1000; x++) {
    if (x%3 === 0 || x%5 === 0) {
        sum +=x;
    }   
}
console.log(sum);



