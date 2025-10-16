function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};

  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map[key]) {
      map[key] = []
    }

    map[key].push(str);
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
