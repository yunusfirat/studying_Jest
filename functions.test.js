const { expect } = require("@jest/globals")
const functions = require("./functions")


// test("add 2 + 2 = 4", () => {
//     expect(functions.add(2,2)).toEqual(4)
// })

test("add 2 + 2 not equal 5", () => {
    expect(functions.add(2,2)).not.toBe(5)
})

test("value null", () => {
    expect(functions.isNull()).toBeNull()
}) 

test("check value", () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
}) 

test("user should be object Yunus Firat", ()=>{
    expect(functions.createUser()).toEqual({
        firstName: "Yunus",
        lastName: "Firat"
    })
})

test("should be under 1600", () => {
    const load1 = 700;
    const load2 = 800;
    expect(load1 + load2).toBeLessThan(1600);
})

// test regex

test("there is no I in team", () => {
    expect("team").not.toMatch(/I/)
})