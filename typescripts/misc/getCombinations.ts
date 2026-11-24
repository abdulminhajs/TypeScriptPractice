function getCombinations(arr: string[]): string[][] {
    const result: string[][] = [];

    function backtrack(start: number, current: string[]) {
        if (current.length > 0) {
            result.push([...current]);
        }

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
}

const input = ['A', 'B', 'C', 'D', 'E', 'F'];
const combinations = getCombinations(input);

console.log(combinations);