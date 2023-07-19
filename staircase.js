// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    let stair = "";
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        stair += " ";
      } else {
        stair += "#";
      }
    }
    console.log(stair);
  }
  return;
};

module.exports = { staircase };
