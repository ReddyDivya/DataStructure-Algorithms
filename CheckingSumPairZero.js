/*
#1 - Returning first pair of the sum which results in zero from the array.
input - [-5,-4,-3,-2,0,2,4,6,8]
output - [-4,4]
*/
const getFirstSumPairZero = (array) => {
    for (let number of array) {
        console.log('Outer loop');
        for (let i = 1; i < array.length; i++) {
            console.log('Inner loop ' + array[i]);
            if (number + array[i] === 0)
                return [number, array[i]];
        }
    }
}

const result = getFirstSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);


