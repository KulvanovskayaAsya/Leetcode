function permute(nums: number[]): number[][] {
    if (nums.length === 1) return [nums];

    const result: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        const currentElement = nums[i];
        const restNums = nums.filter((_, index) => index !== i);
        const restPerms = permute(restNums);
        
        for (let perm of restPerms) {
            result.push([currentElement, ...perm]);
        }
    }

    return(result)
};
