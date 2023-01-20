const {
	isRealPalindrome,
	runningTotal,
	swap,
	wordSizes,
	union,
	firstRecurring,
	showMultiplicativeAverage,
	multiplyList,
	sequence,
} = require("./exercises");

//write tests in this file
test("Question 1: isRealPalindrome", () => {
	expect(isRealPalindrome("madam")).toBe(true); // true
	expect(isRealPalindrome("Madam")).toBe(true); // true (case does not matter)
	expect(isRealPalindrome("Madam, I'm Adam")).toBe(true); // true (only alphanumerics matter)
	expect(isRealPalindrome("356653")).toBe(true); // true
	expect(isRealPalindrome("356a653")).toBe(true); // true
	expect(isRealPalindrome("123ab321")).toBe(false); // false
});

test("Question 2: runningTotal", () => {
	expect(runningTotal([2, 5, 13])).toStrictEqual([2, 7, 20]); // [2, 7, 20]
	expect(runningTotal([14, 11, 7, 15, 20])).toStrictEqual([14, 25, 32, 47, 67]); // [14, 25, 32, 47, 67]
	expect(runningTotal([3])).toStrictEqual([3]); // [3]
	expect(runningTotal([])).toStrictEqual([]); // []
});

test("Question 3: swap", () => {
	expect(swap("Oh what a wonderful day it is")).toBe(
		"hO thaw a londerfuw yad ti si",
	); // "hO thaw a londerfuw yad ti si"
	expect(swap("Abcde")).toBe("ebcdA"); // "ebcdA"
	expect(swap("a")).toBe("a"); // "a"
});

test("Question 4: wordSizes", () => {
	expect(wordSizes("Four score and seven.")).toStrictEqual({ 3: 1, 4: 1, 5: 1, 6: 1 }); // { "3": 1, "4": 1, "5": 1, "6": 1 }
	expect(wordSizes("Hey diddle diddle, the cat and the fiddle!")).toStrictEqual({
		3: 5,
		6: 1,
		7: 2,
	}); // { "3": 5, "6": 1, "7": 2 }
	expect(wordSizes("What's up doc?")).toStrictEqual({ 2: 1, 4: 1, 6: 1 }); // { "2": 1, "4": 1, "6": 1 }
	expect(wordSizes("")).toStrictEqual({}); // {}
});

test("Question 5: union", () => {
	expect(union([1, 3, 5], [3, 6, 9])).toBe([1, 3, 5, 6, 9]); // [1, 3, 5, 6, 9]
	expect(union([2, 2, 2, 2], [10, 5, 2])).toBe([2, 10, 5]); // [2, 10, 5]
});

test("Question 6: firstRecurring", () => {
	expect(firstRecurring("reuben")).toBe("e"); // "e"
	expect(firstRecurring("anne")).toBe("n"); // "n"
	expect(firstRecurring("restaurant")).toBe("r"); // "r"
	expect(firstRecurring("paul")).toBe(""); // ""
});

test("Question 7: showMultiplicativeAverage", () => {
	expect(showMultiplicativeAverage([3, 5])).toBe("7.500"); // "7.500"
	expect(showMultiplicativeAverage([2, 5, 7, 11, 13, 17])).toBe("28361.667"); // "28361.667"
});

test("Question 8: multiplyList", () => {
	expect(multiplyList([3, 5, 7], [9, 10, 11])).toBe([27, 50, 77]); // [27, 50, 77]
	expect(multiplyList([5, 10, 15, 20], [1, 2, 3, 4])).toBe([5, 20, 45, 80]); // [5, 20, 45, 80]
});

test("Question 9: sequence", () => {
	expect(sequence(5)).toBe([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
	expect(sequence(3)).toBe([1, 2, 3]); // [1, 2, 3]
	expect(sequence(1)).toBe([1]); // [1]
});

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/
