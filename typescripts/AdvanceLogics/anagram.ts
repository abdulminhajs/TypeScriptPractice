function anagramOrNot(str1: string, str2: string) {
    //reverse function is of array but not string
    let sortedString1 = str1.toUpperCase().split("").sort().join("");
    let sortedString2 = str2.toUpperCase().split("").sort().join("");

    if (sortedString1 === sortedString2) {
        console.log(str1 + ' and ' + str2 + " Both string are anagram");
    } else {
        console.log(str1 + ' and ' + str2 + " Both strings are not aragam")
    }


}

anagramOrNot("listen", "silent");
anagramOrNot("hello", "world") 