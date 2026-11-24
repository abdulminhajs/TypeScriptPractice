function commonChars(str1:string,str2:string):string[]{

    const set = new Set(str1);
    const common:string[] = [];

    for(const char of str2){
        if(set.has(char) && !common.includes(char)){
            common.push(char);
        }
    }

    return common;
}

console.log(commonChars("minhaj","mahesh"));