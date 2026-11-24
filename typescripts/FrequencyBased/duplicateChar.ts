function CountDuplicateCharacter(str: string): string[]{
    const  count: Record<string, number>= {};
    const duplicate: string[] = [];

    for(const char of str){
        count[char] = (count[char] || 0) + 1;
    }

    
    for(const char in count){
        if(count[char]>1){
            duplicate.push(char)
        }
    }
    console.log(duplicate);
    return duplicate;
}

CountDuplicateCharacter("MinhajMinnu");

