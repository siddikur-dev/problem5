// 💡Hints:  যদি ইনপুট 200  হয়, তাহলে fine হবে: 200 + 200 × ( 20 / 100) + 30 = 270 Taka

function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare < 1) {
    return "Invalid";
  }

  const fine = fare + fare * (20 / 100) + 30;
  return fine;
}
