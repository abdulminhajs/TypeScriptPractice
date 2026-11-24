function firstNonRepeatingChar(str: string): string | null {
    const count: Record<string, number> = {};

    // Step 1: Count each character
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Step 2: Find the first character with count 1
    for (const char in count) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("vfaabbcde")); // c
//console.log(firstNonRepeatingChar("aabb"));    // null