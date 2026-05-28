let note = 275;
let pourboire = note >= 50 && note <= 300 ? note * 0.15 : note * 0.2;

console.log(
  `La note était de ${note}, le pourboire de ${pourboire} et la valeur totale était de ${note + pourboire}`
);

// Valeur 2
note = 40;
pourboire = note >= 50 && note <= 300 ? note * 0.15 : note * 0.2;

console.log(
  `La note était de ${note}, le pourboire de ${pourboire} et la valeur totale était de ${note + pourboire}`
);

// Valeur 3
note = 430;
pourboire = note >= 50 && note <= 300 ? note * 0.15 : note * 0.2;

console.log(
  `La note était de ${note}, le pourboire de ${pourboire} et la valeur totale était de ${note + pourboire}`
);