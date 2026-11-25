function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
 
  const first = strs[0];

  for (let i = 0; i < first.length; i++) {
    const char = first[i];


    //Compare That Character with Every Other String 
    for (let j = 1; j < strs.length; j++) {

      // thia will Detect a Mismatch 1 check is String Is Too Short and 2 check condition is Characters Don't Match
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