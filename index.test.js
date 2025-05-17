import { capitalize } from "./index.js";

it("Happy path", () => {
  expect(capitalize("bonjour")).toBe("Bonjour");
});

it("Empty", () => {
  expect(capitalize("")).toBe("");
});
