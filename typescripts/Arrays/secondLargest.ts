function secondLargest(arr: number[]): number | null {
    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest;
    //return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargest([10, 5, 20, 8, 20]));


function secondSmallest(arr: number[]): number {

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of arr) {

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        }
        else if (
            num < secondSmallest &&
            num !== smallest
        ) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}