
function findLargestAndSmallest(arr: number[]): { largest: number; smallest: number } | null {
    if (arr.length === 0) {
        return null;
    }


    let largest:number = arr[0];
    let smallest:number = arr[0];

    for (const num of arr) {
        if (num > largest) {
            largest = num;
        }

        if (num < smallest) { 
            smallest = num;
        }
    }

    return { largest, smallest };
}

console.log(findLargestAndSmallest([10, 5, 20, 8, 2]));
// { largest: 20, smallest: 2 }
