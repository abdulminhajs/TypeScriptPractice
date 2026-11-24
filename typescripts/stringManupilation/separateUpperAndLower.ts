function separateUpperAndLower(str: string){

    let upperCase:string =  "";
    let lowerCase:string =  "";
    for(const ch of str ){

        if(ch === ch.toUpperCase()){
            upperCase = upperCase + ch
        } else {
             lowerCase = lowerCase + ch
        }

    }
    console.log(upperCase);
    console.log(lowerCase);
}

separateUpperAndLower("MinhajAbdul");