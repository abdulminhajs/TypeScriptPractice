/* 
To count consonants accurately in TypeScript, you should count ASCII letters (a-z) that are not vowels—rather than simply counting 
"everything that isn't a vowel." That distinction avoids miscounting spaces, digits, punctuation, or symbols as consonants. */

export
const VOWELS = new Set(["a", "e", "i", "o", "u"]);

function countConsonants(input: string, includeY = true): number {
  let count = 0;

  for (const char of input.toLowerCase()) {
    const isAsciiLetter = char >= "a" && char <= "z";
    const isVowel = VOWELS.has(char) || (!includeY && char === "y");

    if (isAsciiLetter && !isVowel) {
      count++;
    }
  }

  return count;
}

// Examples
console.log(countConsonants("TypeScript!"));        // 8 ('t', 'p', 's', 'c', 'r', 'p', 't', and 'y' if includeY is true)
console.log(countConsonants("TypeScript!", false)); // 7 ('y' excluded as a consonant)
console.log(countConsonants("123 - !@#"));         // 0 (non-letters ignored)