const scoreDauphins1 = (96 + 108 + 89) / 3;
const scoreKoalas1 = (88 + 91 + 110) / 3;

console.log("=== Test 1 ===");
console.log("Moyenne Dauphins :", scoreDauphins1);
console.log("Moyenne Koalas :", scoreKoalas1);

if (scoreDauphins1 > scoreKoalas1 && scoreDauphins1 >= 100) {
  console.log("Les Dauphins gagnent !");
} else if (scoreKoalas1 > scoreDauphins1 && scoreKoalas1 >= 100) {
  console.log("Les Koalas gagnent !");
} else if (
  scoreDauphins1 === scoreKoalas1 &&
  scoreDauphins1 >= 100 &&
  scoreKoalas1 >= 100
) {
  console.log("Égalité !");
} else {
  console.log("Aucun gagnant");
}

// Données de test 2
const scoreDauphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 123) / 3;

console.log("=== Test 2 ===");
console.log("Moyenne Dauphins :", scoreDauphins2);
console.log("Moyenne Koalas :", scoreKoalas2);

if (scoreDauphins2 > scoreKoalas2 && scoreDauphins2 >= 100) {
  console.log("Les Dauphins gagnent !");
} else if (scoreKoalas2 > scoreDauphins2 && scoreKoalas2 >= 100) {
  console.log("Les Koalas gagnent !");
} else if (
  scoreDauphins2 === scoreKoalas2 &&
  scoreDauphins2 >= 100 &&
  scoreKoalas2 >= 100
) {
  console.log("Égalité !");
} else {
  console.log("Aucun gagnant");
}

// Données de test 3
const scoreDauphins3 = (97 + 112 + 101) / 3;
const scoreKoalas3 = (109 + 95 + 10) / 3;

console.log("=== Test 3 ===");
console.log("Moyenne Dauphins :", scoreDauphins3);
console.log("Moyenne Koalas :", scoreKoalas3);

if (scoreDauphins3 > scoreKoalas3 && scoreDauphins3 >= 100) {
  console.log("Les Dauphins gagnent !");
} else if (scoreKoalas3 > scoreDauphins3 && scoreKoalas3 >= 100) {
  console.log("Les Koalas gagnent !");
} else if (
  scoreDauphins3 === scoreKoalas3 &&
  scoreDauphins3 >= 100 &&
  scoreKoalas3 >= 100
) {
  console.log("Égalité !");
} else {
  console.log("Aucun gagnant");
}