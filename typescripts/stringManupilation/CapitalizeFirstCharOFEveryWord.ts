function CapitalizeFirstCharOFEveryWord(str: string){

    let words: string[]= str.toLowerCase().split(" ");
;
    let sentance: string[]= [];
     

    for(const word of words){
       const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        
        sentance.push(capitalizedWord);
        
    }

    console.log(sentance.join(" "));

}

CapitalizeFirstCharOFEveryWord("my name is minhaj");