// Question 1
const isRealPalindrome = (str) => {
    const alpha = /[a-z]/;
    const nStr = [...str.toLowerCase()].filter(char => char.match(alpha)).join('');

    for (let i = 0; i < Math.ceil(nStr.length / 2); i++) {
        if (nStr[i] !== nStr[nStr.length - (i + 1)]) {
            return false;
        }
    }
    return true;
};

// Question 2
const runningTotal = (numArr) => {
    const newArr = numArr;
    if (numArr.length < 2) {
        return numArr;
    }

    for (let i = 1; i < numArr.length; i++) {
        newArr[i] += numArr[i - 1];
    }

    return newArr;
};

// Question 3
const swap = (string) => {
    const newStr = string.split(' ');

    for (let i = 0; i < newStr.length; i++) {
        const tempLetter = newStr[i][0];
        newStr[i] = newStr[i].split('');
        newStr[i][0] = newStr[i][newStr[i].length - 1];
        newStr[i][newStr[i].length - 1] = tempLetter;
        newStr[i] = newStr[i].join('');
    }

    return newStr.join(' ');
};

// Question 4
const wordSizes = (str) => {
    if(str === "") return {}
    const numOfLetters = {};
    const wordLengthArr = str.split(' ').map(word => word.length);
    wordLengthArr.sort();

    for (let i = 0; i < wordLengthArr.length; i++) {
        if (numOfLetters[wordLengthArr[i]]) {
            numOfLetters[wordLengthArr[i]] += 1;
        } else {
            numOfLetters[wordLengthArr[i]] = 1;
        }
    }
    return numOfLetters;
};

// Question 5
const union = () => {

};

// Question 6
const firstRecurring = () => {

};

// Question 7
const showMultiplicativeAverage = () => {

};

// Quetsion 8
const multiplyList = () => {
};

// Question 9
const sequence = () => {

};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
