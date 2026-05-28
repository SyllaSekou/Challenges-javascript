let poidsBernard1 = 78;
let tailleBernard1 = 1.69;

let poidsMarcel1 = 92;
let tailleMarcel1 = 1.95;

// Calcul IMC
var imcBernard1 = poidsBernard1 / (tailleBernard1 * tailleBernard1);
var imcMarcel1 = poidsMarcel1 / (tailleMarcel1 * tailleMarcel1);

// Booléen
var bernardHigherIMC1 = imcBernard1 > imcMarcel1;

console.log(imcBernard1);
console.log(imcMarcel1);
console.log(bernardHigherIMC1);

// Données 2
var poidsBernard2 = 95;
var tailleBernard2 = 1.88;

var poidsMarcel2 = 85;
var tailleMarcel2 = 1.76;

// Calcul IMC
var imcBernard2 = poidsBernard2 / (tailleBernard2 * tailleBernard2);
var imcMarcel2 = poidsMarcel2 / (tailleMarcel2 * tailleMarcel2);

// Booléen
var bernardHigherIMC2 = imcBernard2 > imcMarcel2;

console.log(imcBernard2);
console.log(imcMarcel2);
console.log(bernardHigherIMC2);

if (imcBernard1 > imcMarcel1) {
  console.log(`Bernard a un IMC (${imcBernard1.toFixed(1)}) plus élevé que Marcel (${imcMarcel1.toFixed(1)})`);
} else {
  console.log(`Marcel a un IMC (${imcMarcel1.toFixed(1)}) plus élevé que Bernard (${imcBernard1.toFixed(1)})`);
}

function categorieIMC(imc) {
  if (imc < 18.5) {
    return "insuffisance pondérale";
  } else if (imc < 25) {
    return "poids normal";
  } else if (imc < 30) {
    return "surpoids";
  } else {
    return "obésité";
  }
}

// Données 1
let poidsBernard = 78;
let tailleBernard = 1.69;

let poidsMarcel = 92;
let tailleMarcel = 1.95;

// Calcul des IMC
let imcBernard = poidsBernard / (tailleBernard * tailleBernard);
let imcMarcel = poidsMarcel / (tailleMarcel * tailleMarcel);

// Affichage des catégories
console.log(`Bernard : ${categorieIMC(imcBernard)}`);
console.log(`Marcel : ${categorieIMC(imcMarcel)}`);