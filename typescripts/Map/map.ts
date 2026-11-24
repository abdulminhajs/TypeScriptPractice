function characterFrequency(str: string): Map<string, number> {
    const map = new Map<string, number>();

    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    return map;
}

/* b => 1
a => 3
n => 2 */
console.log(characterFrequency("banana")); 

function numberFrequency(arr: number[]): Map<number, number> {
    const map = new Map<number, number>();

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    return map;
}

console.log(numberFrequency([1,2,2,3,3,3]));
/* 1 => 1
2 => 2
3 => 3 */

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9));
/* [0,1] */

function groupAnagrams(words: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const word of words) {

        const key = word
            .split("")
            .sort()
            .join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key)!.push(word);
    }

    return [...map.values()];
}

console.log(
    groupAnagrams(["eat","tea","tan","ate","nat","bat"])
);/* 

[
 ["eat","tea","ate"],
 ["tan","nat"],
 ["bat"]
]
 */


function firstUnique(arr: number[]): number | null {

    const map = new Map<number, number>();

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of arr) {
        if (map.get(num) === 1) {
            return num;
        }
    }

    return null;
}

console.log(firstUnique([2,3,4,2,3,5]));

/* 4 */


const cache1 = new Map<string, string>();

cache1.set("user1", "Minhaj");
cache1.set("user2", "John");

console.log(cache1.get("user1"));/* Minhaj */

const cache = new Map<string, any>();

function getData(key: string) {

    if (cache.has(key)) {
        return cache.get(key);
    }

    const data = `Fetched data for ${key}`;

    cache.set(key, data);

    return data;
}


function mostFrequent(arr: number[]): number {

    const map = new Map<number, number>();

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let maxCount = 0;
    let result = arr[0];

    for (const [num, count] of map) {

        if (count > maxCount) {
            maxCount = count;
            result = num;
        }
    }

    return result;
}

console.log(
    mostFrequent([1,2,2,3,3,3,4])
);





