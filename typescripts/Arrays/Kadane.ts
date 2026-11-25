export
function maxSubArray1(arr: number[]): number {

    let currentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {

        currentSum = Math.max(arr[i], currentSum + arr[i]);

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubArray([1, 2, 3, 2, 1, 4, 3]));

/* 
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
currentSum = arr[0] = -2
maxSum = arr[0] = -2

start = 0
end = 0
tempStart = 0*/


function maxSubArray(arr: number[]) {
    let currentSum = arr[0];
    let maxSum = arr[0];

    let start = 0;      // start of max subarray
    let end = 0;        // end of max subarray
    let tempStart = 0;  // potential new start

    for (let i = 1; i < arr.length; i++) {

        // Decide whether to start a new subarray
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        // Found a better maximum
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    const maxSubarray = arr.slice(start, end + 1);

    return {
        maxSum,
        maxSubarray
    };
}

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log("Maximum Sum:", result.maxSum);
console.log("Maximum Subarray:", result.maxSubarray);

