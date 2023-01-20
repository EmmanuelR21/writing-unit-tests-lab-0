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
const runningTotal = () => {

};

// Question 3
const swap = () => {

};

// Question 4
const wordSizes = () => {

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
