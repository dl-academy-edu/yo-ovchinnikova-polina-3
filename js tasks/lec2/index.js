// let number;

// (function typeOf() {
//   number = prompt("Введите число");

//   if (!Number.isNaN(+number)) {
//     if (number > 40) {
//       alert(`Я не буду запускать консоль ${number} раз, это слишком много, вводи число <= 40!`);
//       typeOf();
//     }
    
//     for (let i = 0; i <= number; i++) {
//       if (i % 4 == 0) continue;
//       console.log(i);
//     }
//   } else {
//     alert(`Вы передали ${typeof number}, а не число!`);
//     typeOf();
//   }
// })();



// факториал
const num = 5;
var a = 1;
var b = 1;
while (b<=num) {
    a = a * b;
    b ++;
}
console.log (a);


// 3
