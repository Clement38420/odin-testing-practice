import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

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

  describe("Division", () => {
    it("Happy path", () => {
      expect(calculator.divide(20, 10)).toBe(2);
    });
    it("Float", () => {
      expect(calculator.divide(0.2, 0.1)).toBeCloseTo(2);
    });
    it("Divide by zero", () => {
      expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
    });
  });
});

describe("caesarCipher", () => {
  it("Happy path", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });
  it("Shift exceeds alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  it("Upper case sensitive", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  it("Ignores punctuation", () => {
    expect(caesarCipher("HeLLo !", 3)).toBe("KhOOr !");
  });
  it("Negative shift", () => {
    expect(caesarCipher("HeLLo !", -20)).toBe("NkRRu !");
  });
});

describe("analyzeArray", () => {
  it("Non number elements", () => {
    expect(() => analyzeArray([8, {}, 9])).toThrow(
      "The array is filled with non number elements",
    );
  });

  it("Empty array", () => {
    expect(() => analyzeArray([])).toThrow("The array is empty");
  });

  describe("average", () => {
    it("Happy path", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    });
  });

  describe("min", () => {
    it("Happy path", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
    });
  });

  describe("max", () => {
    it("Happy path", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
    });
  });

  describe("length", () => {
    it("Happy path", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
    });
  });
});
