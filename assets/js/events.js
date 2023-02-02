/*opgave 1 plus minus*/
let myButtonValue = 0;
const myButtonResult = document.getElementById("buttonResult");
const myAddButton = document.getElementById("addButton");
const mySubButton = document.getElementById("subtractButton");

//skriv event listners her
myAddButton.addEventListener("click", () => {
  myButtonValue++;
  console.log(myButtonValue);

  showResult(myButtonValue, myButtonResult);
});

mySubButton.addEventListener("click", () => {
  myButtonValue--;
  console.log(myButtonValue);

  showResult(myButtonValue, myButtonResult);
});

/* opgave 2 dice*/
const myDiceRes = document.getElementById("diceResult");
const diceButton = document.getElementById("rollDiceOne");

//skriv event listners her
diceButton.addEventListener("click", () => {
  let diceRoll = getRandomNumber(1, 7); // skrev 7 i stedet for 6, da 6 ikke tillod mig at rulle 6, men stoppede tallet før

  showResult(diceRoll, myDiceRes);
});

/* opgave 3 key event */

const myLiveText = document.getElementById("myLiveText");
let myLiveTextResult = document.getElementById("tasteResult");

//skriv event listners her
myLiveText.addEventListener("keyup", () => {
  showResult(myLiveText.value, myLiveTextResult);
});

/* support functions-------------------------------------------------------------------------------*/

/* view code*/
/* viser data i et DOM element, kræver to parametre: data til at vise og elementet det skal vises i.*/
function showResult(myData, myElement) {
  myElement.innerHTML = myData;
}

/* random function. skal bruge en min værdi og en max værdi.
returnerer et tilfældigt tal mellem min og max værdierne*/

function getRandomNumber(min, max) {
  let myMin = Math.ceil(min);
  let myMax = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
