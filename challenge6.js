const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas) {
    console.log(`L’équipe Dauphins gagne (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`L’équipe Koalas gagne (${avgKoalas} vs ${avgDolphins})`);
  }
};

// Test Data 1
 Dauphins : 44, 23, 71
Koalas : 65, 54, 49

const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

checkWinner(scoreDolphins1, scoreKoalas1);

// Test Data 2
 Dauphins : 85, 54, 41
 Koalas : 23, 34, 27

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins2, scoreKoalas2);