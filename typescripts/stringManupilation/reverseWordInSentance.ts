function reverseWord(str: string){
    let reverseWord = str.split(" ").reverse().join(" ");
    console.log(reverseWord + "....Reverse word of " + str)
}

reverseWord("My Name is Minhaj");



 //let reverseWord = str.split(' ') // [ 'My', 'Name', 'Is', 'Minhaj' ]
 //let reverseWord = str.split(' ').reverse();// [ 'Minhaj', 'Is', 'Name', 'My' ]
 // let reverseWord = str.split(' ').reverse().join(" ");// Minhaj Is Name My