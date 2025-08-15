function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare < 1) {
    return "Invalid";
  }

  const fine = fare + fare * (20 / 100) + 30;
  return fine;
}

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }
  const character = str.split(" ").join("").toUpperCase();
  return character;
}

function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  const Country = player1.name;
  const Country2 = player2.name;
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

function isSame(arr1, arr2) {
  // You have to write your code here
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid";

  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let defaultObj = { finalScore: 0, pass: 0, fail: 0 };

  if (marks.length === 0) {
    return defaultObj;
  }

  const passMark = 40;
  const totalSubject = marks.length;
  let totalMarks = 0;

  for (value of marks) {
    if (typeof value !== "number") {
      return "Invalid";
    } else {
      totalMarks += value;
    }
  }

  const averageMarks = totalMarks / totalSubject;
  defaultObj.finalScore = Math.round(averageMarks);

  for (value of marks) {
    if (typeof value !== "number") {
      return "Invalid";
    } else if (value >= passMark) {
      defaultObj.pass++;
    } else {
      defaultObj.fail++;
    }
  }
  return defaultObj;
}

console.log(resultReport(100));
