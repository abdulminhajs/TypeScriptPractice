function nonReaptingChar(str: string){

    let count:Record<string, number> ={};
    let unique:string[] = [];
    for(const char of str){
        count[char] = (count[char] ||0 ) + 1;
    }

    for(const char in count){
        if(count[char] ===1){
            unique.push(char);
        }
    }

    console.log(unique);
}

nonReaptingChar("MinhajMinnu");