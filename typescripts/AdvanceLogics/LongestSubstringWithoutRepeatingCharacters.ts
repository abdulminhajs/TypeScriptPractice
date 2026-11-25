//not able to understand

function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const prevIndex = lastSeen.get(char);

    // Only advance `left` if the previous occurrence lies inside the active window
    if (prevIndex !== undefined && prevIndex >= left) {
      left = prevIndex + 1;
    }

    lastSeen.set(char, i);
    maxLen = Math.max(maxLen, i - left + 1);
  }

  return maxLen;
}

// Examples
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke" / "kew")
console.log(lengthOfLongestSubstring(""));         // 0