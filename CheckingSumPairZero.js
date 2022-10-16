/*
#1 - We return the first pair of the sum results zero from the array.
input - [-5,-4,-3,-2,0,2,4,6,8]
output - [-4,4]
It's a O(n^2) - quadratic Time Complexity which means we've used nested loops 'n' iteration to achieve this.
*/
const getFirstSumPairZero = (array) => {
    for (let number of array) {
        console.log('Outer loop');
        for (let i = 1; i < array.length; i++) //always comparing from index 1 till end
        {
            console.log('Inner loop ' + array[i]);
            if (number + array[i] === 0)
                return [number, array[i]];
        }
    }
}

const result = getFirstSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);


