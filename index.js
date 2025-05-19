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

export function caesarCipher(string, shift) {
  let shifted = "";
  for (let char of string) {
    shifted += shiftChar(char, shift);
  }
  return shifted;
}

function shiftChar(char, shift) {
  if (!"!.?,;:-_ ".includes(char)) {
    return String.fromCharCode(
      char.charCodeAt(0) + conditionedShift(char, shift),
    );
  } else {
    return char;
  }
}

function conditionedShift(char, shift) {
  const alphabet = "abcdefghijklmnpoqrstuvwxyz";
  if (alphabet.indexOf(char.toLowerCase()) + shift > 25) {
    return shift - 26;
  } else if (alphabet.indexOf(char.toLowerCase()) + shift < 0) {
    return shift + 26;
  } else {
    return shift;
  }
}

export function analyzeArray(arr) {
  if (!arr.reduce((acc, cur) => acc && !isNaN(cur), true)) {
    throw Error("The array is filled with non number elements");
  }

  if (!arr.length) {
    throw Error("The array is empty");
  }

  return {
    average: computeAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
  };
}

function computeAverage(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

function getMin(arr) {
  return arr.reduce((acc, cur) => (cur < acc ? cur : acc));
}

function getMax(arr) {
  return arr.reduce((acc, cur) => (cur > acc ? cur : acc));
}
