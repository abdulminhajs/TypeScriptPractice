function arrayManuplation(){
    let num:number[] = [1,2,3,4,5] //output should be [5,4,1,2,3]
    let n:number = num.length;
    let valueOfK= 3;
    // const steps = ((valueOfK % n) + n) % n;//below notes
    let result = num.slice(valueOfK).reverse().concat(num.slice(0, valueOfK));
   //let result = num.slice(steps).reverse().concat(num.slice(0, steps));
    console.log('arrayManuplation ' + num + ' with K value as ' + valueOfK + " => " + result);
}

arrayManuplation();

//.................................................................
//Left Rotate by 1: A left rotation moves elements towards the beginning of the array.
//[1, 2, 3, 4, 5] ==> [3, 4, 5, 1, 2] left 2 means remove first two and add it to last
//right roate Move the last 2 elements to the front [1, 2, 3, 4, 5] ==> [4, 5, 1, 2, 3]
/* No modulo normalization for valueOfK: If valueOfK >= num.length (for example, valueOfK = 7 on a 5-element array), num.slice(7) returns [] and num.slice(0, 7) returns [10, 20, 30, 40, 50], 
giving [10, 20, 30, 40, 50] instead of rotating by 7 % 5 = 2 to get [30, 40, 50, 10, 20].

Negative valueOfK behaves unexpectedly: In JavaScript, num.slice(-2) starts 2 elements from the end ([40, 50]), 
and num.slice(0, -2) stops 2 elements before the end ([10, 20, 30]), producing [40, 50, 10, 20, 30] rather than a clean left rotation by a negative number of steps. */

function rotateArrayLeft(arr: number[], k: number): number[] {
  const n = arr.length;
  if (n === 0) return [];

  const steps = ((k % n) + n) % n;//above notes
 // return arr.slice(steps).reverse().concat(arr.slice(0, steps));
  return arr.slice(steps).concat(arr.slice(0, steps));
}

// Example usage:
const result = rotateArrayLeft([10, 20, 30, 40, 50], 2);

console.log('rotateArrayLeft ' + " [10, 20, 30, 40, 50] " + ' with K value as ' + 2 + " => " + result);




//.....................................................
function rotateArrayRight(arr: number[], k: number): number[] {
  const n = arr.length;
  if (n === 0) return [];

  const steps = ((k % n) + n) % n;
  if (steps === 0) return [...arr];

  return arr.slice(n - steps).concat(arr.slice(0, n - steps));
}

console.log('rotateArrayRight ' + " [10, 20, 30, 40, 50] " + ' with K value as ' + 2 + " => " + rotateArrayRight([10, 20, 30, 40, 50], 2));
//............................................................

function moveZeroToEnd(arr: number[]): number[]{

let sizeOfOriginalArray:number = arr.length;

const nonZeroArray: number[] =arr.filter((num) => num !==0);

let noOfZeros: number =  sizeOfOriginalArray - nonZeroArray.length

return [... nonZeroArray, ...new Array<number>(noOfZeros).fill(0)];
//return [ ...new Array<number>(noOfZeros).fill(0), ... nonZeroArray];

}

const original = [0, 1, 0, 3, 12];
const resultOfZeroWithShiftedToEnd = moveZeroToEnd(original);
console.log('moveZeroToEnd ' + original +  " => " + resultOfZeroWithShiftedToEnd);

  