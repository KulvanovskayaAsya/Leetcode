function runningSum(nums: number[]): number[] {
  let result = [nums[0]];
  let prevSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    result.push(prevSum + nums[i])
    prevSum += nums[i]
  }

  return result
};
