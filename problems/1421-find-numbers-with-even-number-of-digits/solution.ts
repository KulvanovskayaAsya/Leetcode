function findNumbers(nums: number[]): number {
    let result = 0;
    
    for (let number of nums) {
        const digits = Math.floor(Math.log10(number)) + 1;
        if ((digits % 2) === 0) result++;
    }
    
    return result;
};
