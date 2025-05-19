export function capitalize(string) {
  if (!string) return "";
  return string.at(0).toUpperCase() + string.substring(1);
}

export function reverseString(string) {
  let reversedString = "";
  for (let i = 1; i <= string.length; i++) {
    reversedString += string.charAt(string.length - i);
  }
  return reversedString;
}

export const calculator = (() => {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (!b) throw Error("Cannot divide by zero !");
      return a / b;
    },
  };
})();
