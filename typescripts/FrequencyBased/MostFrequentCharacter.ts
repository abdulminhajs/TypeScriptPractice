interface MaxCharResult {
  char: string;
  count: number;
}

function getMostFrequentCharObj(
  input: string,
  ignoreWhitespace = true
): MaxCharResult | null {
  // Null-prototype object avoids Object.prototype key collisions (e.g., "constructor")
  const counts: Record<string, number> = {};
  let maxChar = "";
  let maxCount = 0;

  for (const char of input) {
    if (ignoreWhitespace && /\s/.test(char)) {
      continue;
    }

    const nextCount = (counts[char] || 0) + 1;
    counts[char] = nextCount;

    // Strictly greater (>) keeps the first character that reaches maxCount on a tie
    if (nextCount > maxCount) {
      maxCount = nextCount;
      maxChar = char;
    }
  }

  return maxCount > 0 ? { char: maxChar, count: maxCount } : null;
}

// Examples
console.log(getMostFrequentCharObj("TypeScript"));        // { char: 'p', count: 2 }
console.log(getMostFrequentCharObj("constructor"));       // { char: 'c', count: 2 } (safe even for prototype names)
console.log(getMostFrequentCharObj("a b c   d"));         // { char: 'a', count: 1 } (spaces ignored)
console.log(getMostFrequentCharObj("a b c   d", false));  // { char: ' ', count: 5 } (spaces counted)
console.log(getMostFrequentCharObj(""));                  // null