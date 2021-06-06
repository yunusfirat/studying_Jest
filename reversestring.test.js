const reverseString = require("./reversestring");
const { expect } = require("@jest/globals")

test("reverse string", () => {
    expect(reverseString).toBeDefined();
})

test("string reverses", () => {
    expect(reverseString("hello")).toEqual("olleh");
})