/*
1) Sum Zero
Write a function that takes in an array of numbers. 
The function should return True if any two numberss in list sum to 0, and false otherwise.
*/

const addToZero = a => {
    let result = false
    for (let i = 0; i < a.length; i++) {
        for (let x = 0; x < a.length; x++) {
            if (a[i] + a[x] === 0 && i !== x) {
                return result = true
            }
        }
    }
    return result
}

// console.log(addToZero([])); // -> False
// console.log(addToZero([1])); // -> False
// console.log(addToZero([1, 2, 3])); // -> False
// console.log(addToZero([1, 2, 3, -2])); // -> True


// the above function is O(n^2) time complexity
// the above function is O(1) space complexity

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

/*
2) Unique Characters
Write a function that takes in a single word, as a string. 
It should return True if that word contains only unique characters. 
Return False otherwise.
*/

const hasUniqueChars = str => {
    str = str.split('').sort()
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            return false
        }
    }
    return true
}

// console.log(hasUniqueChars("Monday")); // -> True
// console.log(hasUniqueChars("Moonday")); // -> False

// the above function is O(n log n) time complexity
// the above function is O(1) space complexity

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


/*
3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once, 
like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.
*/

const isPangram = s => {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    s = s.toLowerCase().split('').filter((e, i, a) => /^[a-z]/g.test(a[i])).sort()
    let result = []
    for (let i = 0; i < s.length; i++) {
        if (!result.includes(s[i])) {
            result.push(s[i])
        }
    }
    return result.length === alphabet.length
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // -> True
// console.log(isPangram("I like cats, but not mice")); // -> False

// the above function is O(n log n) time complexity
// the above function is O(n) space complexity

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

/*
4) Longest Word
Write a function, find_longest_word, 
that takes a list of words and returns the length of the longest one.
*/


const findLongestWord = arr => arr.sort((a,b) => b.length - a.length)[0].length

// console.log(findLongestWord(["hi", "hello"])); // -> 5

// the above function is O(n log n) time complexity
// the above function is O(1) space complexity

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////