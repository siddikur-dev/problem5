function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let Country = player1.name;
  let Country2 = player2.name;
  player1 = player1.foul + player1.cardY + player1.cardR;
  player2 = player2.foul + player2.cardY + player2.cardR;
  if (player1 === player2) {
    return "Tie";
  } else if (player1 < player2) {
    return Country;
  } else {
    return Country2;
  }
}

let result = [
  { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
  { name: "Sweden", foul: 7, cardY: 4, cardR: 1 },
];
let final = bestTeam(result[0], result[1]);
console.log(final);
