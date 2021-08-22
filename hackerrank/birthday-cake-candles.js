// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example
// candles = [4,4,1,3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.

function birthdayCakeCandles(candles) {
  const maxNum = Math.max(...candles);
  let counter = 0;

  candles.forEach((candle) => {
    if (candle === maxNum) {
      counter++;
    }
  });
  return counter;
}

// birthdayCakeCandles([3, 2, 1, 3]);
birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);
