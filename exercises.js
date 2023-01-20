// Question 1
const isRealPalindrome = (str) => {
	const alpha = /[a-z]/;
	const nStr = [...str.toLowerCase()]
		.filter((char) => char.match(alpha))
		.join("");

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
	const newStr = string.split(" ");

	for (let i = 0; i < newStr.length; i++) {
		const tempLetter = newStr[i][0];
		newStr[i] = newStr[i].split("");
		newStr[i][0] = newStr[i][newStr[i].length - 1];
		newStr[i][newStr[i].length - 1] = tempLetter;
		newStr[i] = newStr[i].join("");
	}

	return newStr.join(" ");
};

// Question 4
const wordSizes = (str) => {
	if (str === "") return {};
	const numOfLetters = {};
	const wordLengthArr = str.split(" ").map((word) => word.length);
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
const union = (arr1, arr2) => {
	const combinedArr = [...arr1, ...arr2];
	const returnArr = [];
	let mem = "";

	for (let i = 0; i < combinedArr.length; i++) {
		if (!mem.includes(combinedArr[i])) {
			returnArr.push(combinedArr[i]);
			mem += combinedArr[i];
		}
	}

	return returnArr;
};

// Question 6
const firstRecurring = (string) => {
	const wordLetters = {};

	for (let i = 0; i < string.length; i++) {
		if (wordLetters[string[i]]) {
			wordLetters[string[i]] += 1;
		} else {
			wordLetters[string[i]] = 1;
		}
		if (wordLetters[string[i]] > 1) {
			return string[i];
		}
	}

	return "";
};

// Question 7
const showMultiplicativeAverage = (numArr) => {
	let product = 1;

	for (let i = 0; i < numArr.length; i++) {
		product *= numArr[i];
	}
	return (product / numArr.length).toFixed(3);
};

// Quetsion 8
const multiplyList = (numArr1, numArr2) => {
	const productArr = numArr1.map((num, i) => num * numArr2[i]);
	return productArr;
};

// Question 9
const sequence = (num) => {
	const arr = [];
	for (let i = 1; i <= num; i++) {
		arr.push(i);
	}
	return arr;
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
