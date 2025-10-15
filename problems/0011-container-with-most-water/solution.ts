function maxArea(height: number[]): number {
    let start = 0;
    let end = height.length - 1;

    let maxVolume = 0;

    while (start < end) {
        const startHeigth = height[start];
        const endHeigth = height[end];

        const currentVolume = Math.min(startHeigth, endHeigth) * (end - start);
        if (maxVolume < currentVolume) maxVolume = currentVolume;

        if (startHeigth < endHeigth) {
            start++;
        } else {
            end--;
        }
    }

    return maxVolume;
};
