function CountCharacterFrequency(str: string): Record<string,number>{
    const  count: Record<string, number>= {};

    for(const char of str){
        count[char] = (count[char] || 0) + 1;
    }

    console.log(count);
    return count;
}
//{ M: 1, i: 2, n: 4, h: 1, a: 1, j: 1, u: 1 }
CountCharacterFrequency("Minhajninnu");


//.............Word Frequency
function wordFrequency(sentence: string): Record<string, number> {
  const freq: Record<string, number> = {};
  const words = sentence.toLowerCase();
  for (const word of words) {
    freq[word] = (freq[word] ?? 0) + 1;
  }
  return freq;
}

// Example: wordFrequency("To be, or not to be.") -> { to: 2, be: 2, or: 1, not: 1 }