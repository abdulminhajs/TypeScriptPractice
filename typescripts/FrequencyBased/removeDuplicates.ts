function removeDuplicates(arr:number[]): number []{
    const result: number[] = [];

    for(const num of arr) {
        if(!result.includes(num)) {
            result.push(num);
        }
    }


    return result
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));