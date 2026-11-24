//find the missing numbers in array
const arr = [1, 2, 3, 5, 6, 7, 9, 10];
const total = 10;
const missingNumb = [];

for(let i=1; i<=total; i++){

    if(!arr.includes(i)){

        missingNumb.push(i);

    }

}

console.log(missingNumb)


const num = [1, 2, 3, 2, 5, 5, 6, 7, 9, 9, 10];

const result = num.filter((item, index) => num.indexOf(item) === index);
console.log('duplicate removed ' + result)
console.log('RESULT ' + result)

/* 
The indexOf() method in JavaScript finds the first position (index) of a specified value 
inside a string or an array. It returns the 0-based index if the value is found,
 and -1 if it is not present. */

const arrary1 = [1, 2, 3, 1 ,2, 5, 5, 6, 7, 9, 9, 10];
const removeDub = arrary1.filter((val,index)=> {
    return arrary1.indexOf(val) === index;
})

console.log('Removed duplicate' + removeDub)


const removeDub1 = arrary1.filter((val,index)=> {
    return arrary1.indexOf(val) !== index;
})

console.log('duplicate numbers are ' + removeDub1)


