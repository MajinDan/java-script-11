// //diffrence between var and let
// let carName = "quincy";
// let quote;

// catName = "Beanu";

// function catTalk() {
//     "use strict";
// }

// carName = "oliver";
// qoute = catName + " says meow";

// console.log(catTalk());




//scopes of var and let

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
       let i = "block scope";
        console.log("Block scope i is :",i);
    }
    console.log("function scope i is :", i)
    return i;
}

console.log(checkScope());