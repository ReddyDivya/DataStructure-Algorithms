/*
#1 - Returning first pair of the sum which results in zero from the array.
input - [-5,-4,-3,-2,0,2,4,6,8]
output - [-4,4]
It's a O(n^2) - quadratic Time Complexity which means we've used 1 loops to achieve this.
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


