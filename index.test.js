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

  describe("Subtraction", () => {
    it("Happy path", () => {
      expect(calculator.subtract(10, 20)).toBe(-10);
    });
    it("Float", () => {
      expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
    });
  });

  describe("Multiplication", () => {
    it("Happy path", () => {
      expect(calculator.multiply(10, 20)).toBe(200);
    });
    it("Float", () => {
      expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });
  });
});
