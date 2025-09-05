function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  const result = new Array(nums.length);
  let i = nums.length - 1;

  while (left <= right) {
    const l2 = nums[left] * nums[left];
    const r2 = nums[right] * nums[right];
    if (l2 >= r2) {
      result[i--] = l2;
      left++;
    } else {
      result[i--] = r2;
      right--;
    }
  }
  return result;
}
