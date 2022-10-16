/*
#1 - Returning first pair of the sum which results in zero from the array.
input - [-5,-4,-3,-2,0,2,4,6,8]
output - [-4,4]
It's a O(n) - linear Time Complexity which means we've used 1 loop to achieve this.
*/

const getFirstSumPairZero = (array) => {
    let left = 0; //0th index
    let right = array.length - 1; //last index

    while (left < right)//because the array is sorted
    {
        let sum = array[left] + array[right];

        if (sum > 0)
            right--;
        else if (sum < 0)
            left++;
        else
            return [array[left], array[right]];//returing first pair
    }
}

const result = getFirstSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);


