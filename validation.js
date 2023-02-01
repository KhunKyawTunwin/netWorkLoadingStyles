// let checkName = document.querySelector("#name");
// let email = document.querySelector("#Email");
// let password = document.querySelector("#password");
// let button = document.querySelector("#btn");

// checkName.addEventListener("keyup", nameChange);
// email.addEventListener("keyup", eamilChange);
// password.addEventListener("keyup", passwordChange);

// let nameVar = false;
// let emailVar = false;
// let passwordVar = false;

// // Check Name Invalid

// function nameChange() {
//    let stringName = checkName.value;
//    let reqular = /^[a-zA-Z0-9]+$/;

//    if (!reqular.test(stringName)) {
//       checkName.classList.add("is-invalid");
//       nameVar = false;
//    } else {
//       checkName.classList.remove("is-invalid");
//       nameVar = true;
//    }
//    setEnable();
// }

// // Check Email invalid
// function eamilChange() {
//    let stringName = email.value;
//    let regulation = /^([a-zA-Z0-9_\-\.]+)@([a-z]+)\.([a-z]{2,5})$/;
//    //    let regulation1 =
//    //       /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
//    if (!regulation.test(stringName)) {
//       email.classList.add("is-invalid");
//       emailVar = false;
//    } else {
//       email.classList.remove("is-invalid");
//       emailVar = true;
//    }
//    setEnable();
// }

// //  check for Password

// function passwordChange() {
//    let stringName = password.value;
//    let regulation = /^[a-zA-Z0-9\w]{6,20}$/;
//    if (!regulation.test(stringName)) {
//       password.classList.add("is-invalid");
//       passwordVar = false;
//    } else {
//       password.classList.remove("is-invalid");
//       passwordVar = true;
//    }
//    setEnable();
// }
// function setEnable() {
//    if (nameVar && emailVar && passwordVar) {
//       button.classList.remove("disabled");
//    } else {
//       button.classList.add("enabled");
//    }
// }

// pure Person Object

// function NewPerson(name, age) {
//    this.name = name;
//    this.age = age;
// }

// let lastPerson = new NewPerson("namekyawetunw", 10);
// console.log(lastPerson.age);

// const circle = {
//    radiu: 1,
//    location: {
//       x: 1,
//       y: 2,
//    },
//    isVisleb: true,
//    draw: function () {
//       console.log("draw");
//    },
// };

// function creatCircle(radius) {
//    return {
//       radius,
//       draw() {
//          console.log("draw");
//       },
//    };
// }

// const newCircle = creatCircle("kyawtunwin");
// console.log(newCircle);

// function newArray(number) {
//    return {
//       number,
//       outPut() {
//          console.log("outPut");
//       },
//    };
// }

// const newOuputData = newArray(22);
// console.log(newOuputData);

// const newOuputData2 = newArray(10);
// console.log(newOuputData2);

// //Object & Array Destructuring အရေးတွေကို ဖြန့်ထားလိုက်တာပါ

// let userData = ["mag ang", 20, "yanggon", "graduated"];

// let [newname, age, loca, education] = userData;

// console.log(age);

// let totalResult = 3 + 5 - (1 * 4) / 2;
// let totalResult2 = 3 - 5 + (1 * 4) / 2;

// let arrayName = [
//    "Personal Data",
//    "Qualification",
//    "Education",
//    "ID verification",
//    "Data Structure in Bank",
// ];

// let otherArray = {
//    perosn: [
//       "2333",
//       "id number",
//       "array items in the API Links",
//       "Data alchoratham",
//    ],
// };

// let nameNew = arrayName.concat(otherArray.perosn);
// console.log(nameNew);

// // let otherTotalData = [...otherArray.perosn, ...arrayName];

// // console.log(otherTotalData);

// function multiply(mutiplier, ...theArray) {
//    return theArray.map(function (element) {
//       return mutiplier * element;
//    });
// }
// let totalArr = multiply(3, 3, 4, 8, 5);
// console.log(totalArr);

// let UrlLink = "https://www.youtube.com/watch?v=QO4NXhWo_NM";

class Stack {
   constructor() {
      this.data = [];
   }
   add(record) {
      this.data.push(record);
   }
   remove() {
      this.data.pop();
   }
}
newStack = new Stack();

for (let i = 1; i < 6; i++) {
   newStack.add(i);
}

newStack.remove();
console.log(newStack);

//
module.exports = Stack;
