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
