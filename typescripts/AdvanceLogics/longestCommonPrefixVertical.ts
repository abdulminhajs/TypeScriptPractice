function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  const first = strs[0];

  for (let i = 0; i < first.length; i++) {
    const char = first[i];

    for (let j = 1; j < strs.length; j++) {
        //i >= strs[j].length means: "our character position i is at or past the end of strs[j]—so strs[j] has no character at index i."
      if (i >= strs[j].length || strs[j][i] !== char) { //strs[j][i] !== char means: "the character at position i inside the j-th string is NOT equal to char."
        return first.slice(0, i);
      }
    }
  }

  return first;
}

// Examples
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inters"
console.log(longestCommonPrefix(["single"]));                 // "single"
console.log(longestCommonPrefix([]));