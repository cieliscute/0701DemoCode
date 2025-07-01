function isEven(num) {
  return num % 2 === 0;
}

// 新增一個sum的utils function
function add(a, b) {
  return Number((a + b).toFixed(1));
}

module.exports = { add, isEven };
