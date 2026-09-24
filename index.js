// // Ep. 4 
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }


// // Ep. 5
// var a = 10;
// function b() {
//     var x = 10;
// }
// console.log(window.a);
// console.log(a);
// console.log(this.a);


// // Ep. 6
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "Hello Ananya !";
// console.log(a);


// // Ep. 7
// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// a();


// // Ep.10
// function z() {
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a);
//         }
//         y();
//     }
//     x();
// }
// z();


// // Ep.11
// // Using let
// function x() {
//     for(let i = 1 ; i <= 5 ; i++){
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello Ananya !");
// }
// x();

// // Using var
// function x() {
//     for(let i = 1 ; i <= 5 ; i++){
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);
//     }
//     console.log("Hello Ananya !");
// }
// x();



// // Ep.14
// function attachEventListeners() {
//     let count = 0;
//     document.getElementById("clickMe")
//         .addEventListener("click", function () {
//             console.log("Button Clicked", ++count);
//         })
// }
// attachEventListeners();



// // Ep. 18
// const radius = [3 , 1 , 2 , 4];

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0 ; i < radius.length ; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0 ; i < radius.length ; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }; 

// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i = 0 ; i < radius.length ; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }; 

// console.log(calculateDiameter(radius)); 

// // More optimised code
// const radius = [3 , 1 , 2 , 4];

// const area = function (radius) {
//     return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//     return 2 * radius;
// };

// const calculate = function (radius , logic) {
//     const output = [];
//     for (let i = 0 ; i < radius.length ; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius , area));
// console.log(calculate(radius , circumference));
// console.log(calculate(radius , diameter));


// // EP.19
// // 1. Map Function - used to transform an array.
// const arr = [5 , 1 , 3 , 2 , 6];

// // Double of the array values
// function double(x) {
//     return x * 2;
// }
// const output = arr.map(double);
// console.log(output);

// // Triple of the array values
// function triple(x) {
//     return x * 3;
// }
// const output = arr.map(triple);
// console.log(output);

// // Binary of the array values
// function binary(x) {
//     return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output); 

// // 2. Filter Function - used to filter the values inside the array.
// const arr = [5 , 1 , 3 , 2 , 6];

// // Filter odd values
// function isOdd(x) {
//     return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// // Filter odd values
// function isEven(x) {
//     return x % 2 == 0;
// }
// const output = arr.filter(isEven);
// console.log(output);

// // Filter Greater than 4 values
// function greaterThan4(x) {
//     return x > 4;
// }
// const output = arr.filter(greaterThan4);
// console.log(output);


// // 3. Reduce Function - takes all elements of an array and outputs a single value
// const arr = [5 , 1 , 3 , 2 , 6];

// // Sum (Normal Method)
// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0 ; i < arr.length ; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// // Using Reduce Function
// const output = arr.reduce(function(add , curr) {
//     add = add + curr;
//     return add;
// } , 0);
// console.log(output);


// // Max (Normal Method)
// function findMax(arr) {
//     let max = 0;
//     for (let i = 0 ; i < arr.length ; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// // Using Reduce Function
// const output = arr.reduce(function (max , curr) {
//     if (curr > max) {
//         max = curr;
//     }
//     return max;
// } , 0);
// console.log(output);

// // Examples of these 3 functions (map , filter , reduce)
// const users = [
//     { firstName : "Ananya" , lastName : "Sharma" , age : 20 } , 
//     { firstName : "Donald" , lastName : "Trump" , age : 75 } ,
//     { firstName : "Elon" , lastName : "Musk" , age : 50 } ,
//     { firstName : "Deepika" , lastName : "Padukone" , age : 20 } ,
// ];

// // List of full names
// const output = users.map(x => x.firstName + " " + x.lastName);
// console.log(output);

// // List of age 
// const output1 = users.reduce(function (acc , curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// } , {});
// console.log(output1);

// // Names of people whose age is less than 30
// const output2 = users.filter(x => x.age < 30).map((x) => x.firstName);
// console.log(output2);


// // Combining all three methods (map , filter , reduce) together
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // Step 1: Double each number
// // Step 2: Keep only numbers greater than 10
// // Step 3: Find the total sum
// let result = numbers
//   .map(num => num * 2)
//   .filter(num => num > 10)
//   .reduce((sum, num) => sum + num, 0);

// console.log(result);