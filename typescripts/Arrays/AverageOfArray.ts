function averageArray(nums: number[]): number | null {
  if (nums.length === 0) {
    return null; // or throw new Error("Cannot compute average of an empty array");
  }

  let total = 0;
  for (const num of nums) {
    total += num;
  }

  return total / nums.length;
}