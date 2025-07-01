const { sum } = require("./sum");

test("sum(1, 2) should return 3", () => {
  expect(sum(1, 2)).toBe("result is 3");
});

test("sum(0.1, 0.2) should return 0.3", () => {
  expect(sum(0.1, 0.2)).toBe("result is 0.3");
});
