function countVowelsWithoutY(str:string){

    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let countOfVowels = 0;
    for(const ch of str){
        if(vowels.has(ch)){
            countOfVowels ++;
        }
    }

    console.log(countOfVowels);
}

countVowelsWithoutY("TypeScript");



const VOWELS = new Set(["a", "e", "i", "o", "u"]);

function countVowels(input: string, includeY = false): number {
  let count = 0;

  for (const char of input.toLowerCase()) {
    if (VOWELS.has(char) || (includeY && char === "y")) {
      count++;
    }
  }

  return count;
}

// Examples
console.log(countVowels("TypeScript"));        // 2 ('e', 'i')
console.log(countVowels("TypeScript", true));  // 3 ('y', 'e', 'i')
console.log(countVowels("Rhythm"));            // 0
console.log(countVowels("Rhythm", true));      // 1 ('y')