// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
const plusMinus = (arr) => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  arr.forEach((number) => {
    if (number > 0) {
      positiveCount++;
    } else if (number) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });

  const newArr = [positiveCount, negativeCount, zeroCount].map(
    (number) => number / arr.length
  );

  return newArr;
};

module.exports = { plusMinus };
