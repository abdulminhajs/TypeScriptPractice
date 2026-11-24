function sumOfArray(array:number[]){
    let sum:number = 0;
    for(const num of array){
        sum = sum + num;
    }

    console.log(sum);

}


sumOfArray([1,2,5,6])