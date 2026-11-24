const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const union = [...new Set([...array1, ...array2])];

console.log(union); //[1, 2, 3, 4, 5, 6]