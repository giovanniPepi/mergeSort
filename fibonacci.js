const resultArray = [];
resultArray.push(0);
resultArray.push(1);

const recArray = [];

// looping
const fibonacci = (count) => {
  // manually populated
  count -= 2;
  if (count < 0) return null;
  if (count === 0) return 0;
  let a = 0;
  let b = 1;

  for (let i = 1; i <= count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
    resultArray.push(b);
  }
  return b;
};

// recursive
const fibsRec = (num) => {
  if (num === 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  }

  return fibsRec(num - 1) + fibsRec(num - 2);
};

fibonacci(8);
console.log(8);

console.log(resultArray);
console.log(recArray);
