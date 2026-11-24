function twoSumSimple(nums: number[], target: number): [number, number][] {
  const result: [number, number][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

console.log(twoSumSimple([2, 7, 11, 2], 9)); // [[0, 1], [1, 3]]
//................................

function threeSumSimple(nums: number[], target = 0): [number, number, number][] {
  const result: [number, number, number][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return result;
}

console.log(threeSumSimple([-1, 0, 1, 2, -1, -4]));