function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;

    let max = 0;
    let start = 0;
    let substrChars = new Set();

    for (let end = 0; end < s.length; end++) {
        let currChar = s[end];

        while (substrChars.has(currChar)) {
            substrChars.delete(s[start]);
            start++
        }

        substrChars.add(currChar);
        if (substrChars.size > max) max = substrChars.size
    }

    return max;
};

console.log(lengthOfLongestSubstring('ssssssssklopio'))
