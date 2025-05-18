import { capitalize, reverseString, calculator } from "./index.js";

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

describe("calculator", () => {
  describe("Addition", () => {
    it("Happy path", () => {
      expect(calculator.add(10, 20)).toBe(30);
    });
    it("Float", () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });
});
