/**
 Do not return anything, modify arr in-place instead.
 */
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let zeroesCount = 0;
  let to = arr.length - 1;

  for (let i = 0; i <= to - zeroesCount; i++) {
    if (arr[i] === 0) {
        if (i == to - zeroesCount) {
            arr[to] = 0;
            to--;
            break;
        }

        zeroesCount++
    };
  }

  let from = to - zeroesCount;

  while (from >= 0) {
    arr[to] = arr[from];

    if (arr[from] === 0) {
        arr[to - 1] = 0;
        to--;
    }

    to--;
    from--;
  }

  console.log(arr);
}
