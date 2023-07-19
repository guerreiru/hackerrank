const birthdayCakeCandles = (candles) => {
  const occurrences = {};

  candles.forEach((num) => {
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  });

  const maxOccurrences = Math.max(...Object.values(occurrences));

  console.log(maxOccurrences);
  return maxOccurrences;
};

module.exports = { birthdayCakeCandles };
