function countWords(input: string): number {
  const trimmed = input.trim();
  if (trimmed === "") {
    return 0;
  }

  return trimmed.split(/\s+/).length;
}

// Examples
console.log(countWords("Hello TypeScript world"));         // 3
console.log(countWords("  Multiple   spaces \n\t here ")); // 3
console.log(countWords("   "));                          // 0
console.log(countWords(""));                             // 0

/* 
To count words accurately in TypeScript, split on whitespace (/\s+/) after trimming rather than using input.split(" ").
 Splitting on a single space breaks whenever there are multiple spaces, leading/trailing spaces, tabs, or newlines. */