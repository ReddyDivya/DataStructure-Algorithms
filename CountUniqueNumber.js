/*
    #3 get unique number count from the array
    input - [1,1,2,2,3,4,4,5,6,7,8,8,9,9]
    output - 9

    Condition
    i=0, j=1
    
    array[i] !== array[j]
        1. i++ - moving i to next element
        2. array[i] = array[j] - moving j value backward

    It's a O(n) - linear Time Complexity which means we haven't used nested loop to achieve this.
*/

const countUniqueNumbers = (array) => {
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i + 1;
    }
    else {
        throw Error('Array is empty');
    }
}

const result = countUniqueNumbers([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9]);
console.log(result);