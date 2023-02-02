/*
brug document.getElementById() til at finde dom elementer der er røde og gule.
consol logge dem, så du kan se detaljer om dem.
skriv din kode her
*/

let redF = document.getElementById("redFigure");
console.log(redF);

let qredF = document.querySelector("#redFigure");
console.log(qredF);

let yellowF = document.getElementById("yellowFigure");
console.log(yellowF);

let qyellowF = document.querySelector("#yellowFigure");
console.log(qyellowF);

/*
brug document.getElementsByClassName() til at finde dom elementer
og consol logge dem, så du kan se detaljer om dem.
skriv din kode her
*/
let allElements = document.getElementsByClassName("myFigure");
console.log(allElements);

let qallElements = document.querySelectorAll(".myFigure");
console.log(qallElements);
/*
find dom elementer med id redFigure og yellowFigure og brug innerHTML til at ændre deres tekst
skriv din kode her.
*/
redF.innerHTML = "YELLOW";
yellowF.innerHTML = "RED";
