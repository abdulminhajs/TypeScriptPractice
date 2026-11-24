function longestWordInSentance(sentence: string):string{

    let sentenceArray:string[] = [];
    let longestLength:number = 0;
    let longestWord:string = "";
    sentenceArray=sentence.split(" ");
    for(const word of sentenceArray){
       if( word.length > longestLength){
        longestWord = word;
       }
    }

    console.log(longestWord);
    return longestWord
}

longestWordInSentance("My Name is Minhaj");