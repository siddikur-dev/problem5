function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let defaultObj = { finalScore: 0, pass: 0, fail: 0 };

  if (marks.length === 0) {
    return defaultObj;
  }

  let totalMark = 0;

  for (let score of marks) {
    totalMark += score;
    if (score >= 40) {
      defaultObj.pass++;
    } else {
      defaultObj.fail++;
    }
  }

  defaultObj.finalScore = Math.round(totalMark / marks.length);

  return defaultObj;
}
