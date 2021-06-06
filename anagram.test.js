const { expect } = require("@jest/globals");
const isAnagram = require("./anagram");


test("is anagram function exist", () => {
    expect(typeof isAnagram).toEqual("function")
});



test(`cinema is an anagram of "iceman"`, () => {
    expect(isAnagram("cinema", "iceman")).toBeTruthy();
})


test(`hellow is an anagram of "aloha"`, () => {
    expect(isAnagram("hello", "aloha")).toBeFalsy();
})


