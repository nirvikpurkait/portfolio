/**
 * returns for an array of how much
 * should be cover with color of the star.
 */

export const starArray = function (
  avgStar: number,
  maxStar: number
): [number, number][][] {
  let ansArray = [] as [number, number][][];
  let crossed = false;

  for (let i = 1; i <= maxStar; i++) {
    if (i < avgStar) {
      ansArray.push([
        [0, 1],
        [1, 1],
      ]);
    }

    if (i >= avgStar && !crossed) {
      ansArray.push([
        [0, 1],
        [avgStar - (i - 1), 1],
        [avgStar - (i - 1), 0],
        [1, 0],
      ]);
      crossed = true;
      continue;
    }

    if (i >= avgStar && crossed) {
      ansArray.push([
        [0, 0],
        [1, 0],
      ]);
    }
  }

  return ansArray;
};
