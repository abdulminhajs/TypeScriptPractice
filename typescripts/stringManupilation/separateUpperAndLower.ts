function separateLetters(sentence: string) {
    const upperCase: string[] = [];
    const lowerCase: string[] = [];

    for (const char of sentence) {
        if (/[A-Z]/.test(char)) {
            upperCase.push(char);
        } else if (/[a-z]/.test(char)) {
            lowerCase.push(char);
        }
    }

    return { upperCase, lowerCase };
}

console.log(separateLetters("HeLLo WoRLd"));