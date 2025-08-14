function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }
  let character = str.split(" ").join("").toUpperCase();
  return character;
}
console.log(onlyCharacter(true

));
