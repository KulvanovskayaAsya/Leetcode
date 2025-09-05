function findMaxConsecutiveOnes(nums: number[]): number {
    let maxStreak = 0;
    let streak = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
          streak++;
          if (streak > maxStreak) { 
              maxStreak = streak
          };
        } else {
          streak = 0;
        }
    }
    
    return maxStreak
};
