export function capitalize(string) {
  if (!string) return "";
  return string.at(0).toUpperCase() + string.substring(1);
}
