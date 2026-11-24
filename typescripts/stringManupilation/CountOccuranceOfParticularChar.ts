function CountOccuranceOfParticularChar(str: string, ch: string): number{
    const  count: Record<string, number>= {};

    for(const char of str){
        count[char] = (count[char] || 0) + 1;
    }

    console.log(count);
    console.log("count of given char: " + count[ch]);
    return count[ch];
}
//{ M: 1, i: 2, n: 4, h: 1, a: 1, j: 1, u: 1 }
CountOccuranceOfParticularChar("Minhajninnu", "n");


function CountOccuranceOfParticularCharWithoutObject(str: string, ch: string): number {
    let count = 0;

    for (const char of str) {
        if (char === ch) {
            count++;
        }
    }

    return count;
}

console.log(CountOccuranceOfParticularChar("Minhajninnu", "n")); // 4
console.log(CountOccuranceOfParticularCharWithoutObject("Minhajninnu", "n"))