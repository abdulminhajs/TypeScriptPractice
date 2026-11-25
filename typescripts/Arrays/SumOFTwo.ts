export
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    //https://www.youtube.com/shorts/BrnrKSJEAbo

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
//................................



function threeSum(arr: number[]): number[][] {
    //https://www.youtube.com/watch?v=cRBSOz49fQk
  const result: number[][] = [];
  
  // Sort in ascending order
  arr.sort((a: number, b: number) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    // Skip duplicate values for the first element
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    
    /* 1. i > 0 (Boundary Guard):
	• On the very first iteration (i = 0), there is no previous element (arr[-1] would be undefined).
	• i > 0 ensures we always process the first occurrence of a number and only start comparing with i - 1 from the second element onward.
2. arr[i] === arr[i - 1] (Duplicate Check):
	• Checks if the current starting number (arr[i]) is identical to the previous starting number (arr[i - 1]).
3. continue; (Skip Iteration):
	• Immediately stops the current loop iteration and jumps to the next value of i (i++), completely bypassing the left/right pointer search. */




    let left: number = i + 1;
    let right: number = arr.length - 1;

    while (left < right) {
      const sum: number = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;

        // to find duplicates [-2, 0, 0, 2, 2]
        /* • arr[left] === arr[left - 1]: Checks if the current left number is identical to the one just processed. Since arr[2] (0) equals arr[1] (0), it increments left to index 3.
        
        
        • left < right: A safety guard ensuring left never crosses past right (which would cause out-of-bounds errors or invalid pairings if all remaining numbers are identical). */
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
// Output: [ [-1, 0, 1], [-1, -1, 2] ]

