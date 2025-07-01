const { sum } = require("./sum");

// 同事加的測試，他預期 sum 應該回傳數字
test("sum function should return a number for calculation", () => {
  const result = sum(5, 5);
  // 他預期可以用回傳值來做數學運算
  expect(typeof result).toBe("number");
  expect(result).toBeGreaterThan(9);
});
