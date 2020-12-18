// const hello = "hello";

// let object = {
//   name: "Mango Polly",
//   age: 26,
//   hasCar: true,
// };

// let infomation = JSON.stringify(object);
// console.log(infomation);

// let objectInformation = JSON.parse(infomation);
// console.log(objectInformation);

// localStorage.setItem("user", object.name);

// let myName = localStorage.getItem("user");

// console.log(myName);

// const referenceList = {
//   textarea: document.querySelector("#js-message"),
// };
// referenceList.textarea.addEventListener("input", onCommentSubmit);

// function onCommentSubmit(e) {
//   localStorage.setItem("feedback-message", e.currentTarget.value);
// }

// const savedMessage = localStorage.getItem("feedback-message");
// console.log(savedMessage);

// if (savedMessage) {
//   referenceList.textarea.value = savedMessage;
// }

// const atTheOldToad = {
//   potions: [
//     { name: "Зелье скорости", price: 460 },
//     { name: "Дыхание дракона", price: 780 },
//     { name: "Каменная кожа", price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for (let potion of this.potions) {
//       let potionIndex = this.potions.indexOf(potion);
//       if (potion.name === potionName) {
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     return `Зелья ${potionName} нет в инвентаре!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);

//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Зелья ${oldName} нет в инвентаре!`;
//   },
//   // Пиши код выше этой строки
// };

const questionsRef = document.querySelectorAll(".question");
const submitButtonRef = document.querySelector("#js-submit");
const clearButtonRef = document.querySelector("#js-clear");

let total = 0;

questionsRef.forEach((el, index) => {
  const radioButtonRef = document.querySelectorAll(`#answer-${index + 1}`);
  // console.log(radioButtonRef);

  radioButtonRef.forEach((element) => {
    element.addEventListener("change", onAnswerClick);
  });

  function onAnswerClick(e) {
    // console.log(e.target);
    localStorage.setItem(`answer-${index + 1}`, e.target.value);

    radioButtonRef.forEach((e) => {
      e.setAttribute("disabled", true);
    });

    if (e.target.value === "true") {
      total += 1;
      e.target.parentNode.style.backgroundColor = "green";
    } else {
      e.target.parentNode.style.backgroundColor = "red";
    }
  }
});

submitButtonRef.addEventListener("click", onSubmiting);

function onSubmiting() {
  console.clear();
  console.log(total);

  if (total === 5) {
    alert(`You have ${total}/5, You have passed the exam!`);
    document.body.style.background = "forestgreen";
  } else {
    alert(`You have ${total}/5, try again later...`);
  }
}
clearButtonRef.addEventListener("click", onClearButtonClick);

function onClearButtonClick() {}

// Killers
// function findKiller(peoples, dead) {}

// console.log(
//   findKiller(
//     {
//       James: ["Jacob", "Bill", "Lucas"],
//       Johnny: ["David", "Kyle", "Lucas"],
//       Peter: ["Lucy", "Kyle"],
//     },
//     ["Lucas", "Bill"]
//   )
// );
