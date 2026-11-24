function firstNonRepeating(arr: number[]): string | null {
    const count: Record<number, number> = {};

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    for (const num in count) {
        if (count[num] === 1) {
            return num;
        }
    }

    return null;
}

console.log(firstNonRepeating([1, 2, 3, 2, 1, 4, 3])); //4