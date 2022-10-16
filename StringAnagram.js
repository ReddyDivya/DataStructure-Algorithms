/*
    #2 String Anagram
    input - 'hello' - 'llheo' [2 strings are given]

    Conditions for Anagram
    1. equal length
    2. same letters in both the strings
    Eg: hello - {h:1,e:1,l:2,o:1}

    It's a O(n) - linear Time Complexity which means we haven't used nested loop to achieve this.
*/

const isAnagram = (str1, str2) => {

    if (str1.length !== str2.length)
        return false;

    //mapping string 1
    let counter = {};
    for (let letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter], counter);
    }

    //Comparing string1 & string2
    for (let items of str2) {

        if (!counter[items])//checking if str2 letters are in the counter[str1] or not
            return false;

        counter[items] -= 1;//if str2 letters are in the counter[str1]. We've to reduce the count of each letter.
    }

    return true;
}


const result = isAnagram('hello', 'lleho');
console.log(result ? 'The given word is an anagram' : 'The given word is not an anagram');