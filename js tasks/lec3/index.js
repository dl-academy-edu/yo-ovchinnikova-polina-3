// function age () {
//     const num = prompt ("Введите Ваш возраст");
//     if (num < 18) {
//         alert (`Введите Ваш возраст`);
//         age ();
//     } else {
//         alert (`Ура! У Вас получилось!`);
//     }
// };
// age ();


function add (a,b) {
    return a + b;
}
add (1,2);

let index = 0;
function counterCreator () {
    index == counterCreator;
    return function counterCreator () {
        return index ++;
    }
}
let myStep = counterCreator();
console.log (myStep());
console.log (myStep());