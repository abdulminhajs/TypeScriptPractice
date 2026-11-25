function hasPair(
    arr: number[],
    target: number
): boolean {

    const set = new Set<number>();

    for (const num of arr) {

        if (set.has(target - num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}

console.log(hasPair([2,7,11,15], 9));

function removeDuplicates1(arr: number[]): number[]{
    const uniqueArray = [... new Set(arr)] 
    return uniqueArray;
}
console.log(removeDuplicates1([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

function removeDuplicateChars(str: string): string {
    return [...new Set(str)].join("");
}

console.log(removeDuplicateChars("programming"));
// progamin

function hasDuplicates(arr: number[]): boolean {
    return arr.length !== new Set(arr).size;
}

console.log(hasDuplicates([1, 2, 3, 2])); // true
console.log(hasDuplicates([1, 2, 3, 4])); // false

function countDistinctElements(arr: number[]): number {
    return new Set(arr).size;
}

console.log(countDistinctElements([1, 2, 2, 3, 4, 4]));
// 4

function countDistinctCharacters(str: string): number {
    return new Set(str).size;
}

console.log(countDistinctCharacters("hello"));
// 4

function commonCharacters(str1: string, str2: string): string[] {
    const set2 = new Set(str2);

    return [...new Set(str1)].filter(char => set2.has(char));
}

console.log(commonCharacters("hello", "world"));
// ['l', 'o']

function commonElements(arr1: number[], arr2: number[]): number[] {
    const set2 = new Set(arr2);

    return [...new Set(arr1)].filter(num => set2.has(num));
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const union = new Set([...setA, ...setB]);

console.log([...union]);
// [1, 2, 3, 4, 5, 6]

const intersection = new Set(
    [...setA].filter(item => setB.has(item))
);

console.log([...intersection]);
// [3, 4]


const difference = new Set(
    [...setA].filter(item => !setB.has(item))
);

console.log([...difference]);
// [1, 2]

const symmetricDifference = new Set([
    ...[...setA].filter(item => !setB.has(item)),
    ...[...setB].filter(item => !setA.has(item))
]);

console.log([...symmetricDifference]);
// [1, 2, 5, 6]