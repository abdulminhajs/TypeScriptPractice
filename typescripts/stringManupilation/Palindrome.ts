
function isPalindrome(str: string){
    let result = '';
    for(let i = str.length-1; i >= 0; i-- ){
        result = result + str[i]
    }

    if(result===str){
        console.log("this is palindrome " + result)
    } 
    else{
        console.log("not a palindrome " + result)
    }
}

isPalindrome('madam')

