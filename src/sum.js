const { add } = require("./utils");

function sum(a, b) {
  const result = add(a, b);
  return result; // 這邊應該會是數字型別
}

module.exports = { sum };
