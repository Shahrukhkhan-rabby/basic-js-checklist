function getPositiveNumbersUntilNegative(arr){
    let result = [];
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            break;
        }
        result.push(arr[i]);
    }
    return result; 
}

const numbers = [1, 2, 3, -1, 4, 5];
const positiveNumbers = getPositiveNumbersUntilNegative(numbers);
console.log(positiveNumbers);



