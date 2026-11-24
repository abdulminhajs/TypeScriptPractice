function findMissingNumbers(arr:number[], n:number):number[]{
    let missing:number[] = [];
   
    for(let i=1;i<=n;i++){
         let found:boolean = false;
        for(const num of arr){
            if(i===num){
                found=true;
                break;
            }
        }

        if(!found){
            missing.push(i)
        }

        
    }
    return missing
}

console.log(findMissingNumbers([2, 4, 6, 7], 7));