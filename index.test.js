import { capitalize, reverseString } from "./index.js";

describe("Capitalize", () => {
  it("Happy path", () => {
    expect(capitalize("bonjour")).toBe("Bonjour");
  });

  it("Empty", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("reverseString", () => {
  it("Happy path", () => {
    expect(reverseString("bonjour")).toBe("ruojnob");
  });
});
