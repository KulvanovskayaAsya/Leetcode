function getHashmap(nums: number[]): Map<number, number> {
    const hash = new Map<number, number>();
    nums.forEach(num => hash.set(num, (hash.get(num) || 0) + 1));
    return hash;
}

function topKFrequent(nums: number[], k: number): number[] {
    return Array.from(getHashmap(nums))
        .sort(([,a], [,b]) => b - a)
        .slice(0, k)
        .map(([num]) => num);
}
