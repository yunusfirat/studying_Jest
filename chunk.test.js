const { expect } = require("@jest/globals");
const chunk = require("./chunk");

test("chunk array function exist", () => {
    expect(chunk).toBeDefined();
});


test("chunk 10 values with length of 2", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = chunk(numbers,len);
    expect(chunkedArr).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);
});