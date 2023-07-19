const miniMaxSum = (arr) => {
  const sums = [];

  for (let i = 0; i < arr.length; i++) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const numberDisregarded = arr[i];
    sums.push(sum - numberDisregarded);
  }

  sums.sort();

  const greatestSum = sums[0];
  const smallestSum = sums[sums.length - 1];

  console.log(greatestSum, smallestSum);
  return [greatestSum, smallestSum];
};

module.exports = { miniMaxSum };
