const { expect, beforeEach, afterEach, beforeAll, afterAll } = require("@jest/globals")
const { describe } = require("yargs")
const functions = require("./functions")



// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...")
// const closeDatabase = () => console.log("Database Closed...")
const namecheck = () => console.log("checking name....")

describe("checking names", () => {
    beforeEach(() => namecheck())

    test("User is Jeff", () => {
        const user = "jeff"
            expect(user).toBe("jeff")
    })

    test("User is karen", () => {
        const user = "karen"
            expect(user).toBe("karen")
    })
})

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

//  test

test("admin should be in usernames", () => {
    usernames = ["yunus","onder","serap"]
    expect(usernames).toContain("yunus")
})


//  working with async data 
test("user fetched name should be Leanne Graham", () => {
    expect.assertions(1)
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual("Leanne Graham")
    })

    //  second way
    // functions.fetchUser()
    // .then(data => {
    //     expect(data.name).toEqual("Leanne Graham")
    // })
})


// Async await
test("user fetched name should be Leanne Graham", async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham")
})