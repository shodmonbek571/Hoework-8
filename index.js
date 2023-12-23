// function expression
// const sum1 = function (a,b) {
//     return a + b;
// };

// // arrow function 
// const sum2 = (a, b) => {
//     return a + b;
// };
// const sum3 = (a,b)
//IIFE
//Immendiately invoked function expression
// (function() {
//     var surname = "Doe"
// })();

//  1-MASALA
// function kvadratIndex(arr, value) {
// let index = arr.indexOf(value);
// if (index !== -1) {
//   return index * index;
// } else {
//   return "mavjud emas";
//  }
// }

// const array = [1, 2, 3, 6, 8, 25];
// const value = 4;
// console.log(kvadratIndex(array, value));

//2-MASALA

// function biriktirish(arg1, arg2, arg3) {
//     return arg2.concat(arg3, arg1);
// }
// let arg1 = [1, 2, 3, ];
// let arg2 = [4, 5, 6, ];
// let arg3 = [7, 8, 9, ];
// console.log(biriktirish(arg1, arg2, arg3));

//  3-MASALA
// function elementniKvadrati(arg) {
//     const natija = arg.find(element => Math.sqrt(element) % 1 === 0);
//     return Math.pow(natija, 2)
// }
// const numbbers = [ 2, 5, 9, 16, 17, 78, 88];
// console.log(elementniKvadrati(numbbers));
// 4-MASALA
// function toqSon(arg) {
//     let counter = 0;
//     arg.forEach(element => {
//         if (element % 2 !== 0) {
//             counter++
//         }
//     });
//     return counter;
// }
// let numbers = [1, 2, 5, 9, 16, 17, 78, 88];
// console.log(toqSon(numbers));
// 5-MASALA
function oxirgiHarf(arg) {
    const yangiMassiv = [];
    arg.forEach(soz => {
      const uzunlik = soz.length;
      yangiMassiv.push(soz[uzunlik - 1]);
    });
    return yangiMassiv;
  }
  const fruits = ["olma", "shaftoli", "uzum", "anor"];
  console.log(oxirgiHarf(fruits)); 
  