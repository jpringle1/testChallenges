const {
    sum,
    longStrings
} = require('../../testChallengesV2/app') //import function from file

test("1 + 2 = 3", () => { //test = "test expectation" => 
    expect(sum(1, 2)).toEqual(3) //
})

test("chal 1 - 1 + 2 doesn't equal null",() => {
    expect(sum(1,2)).not.toEqual(null)
})

test("chal 2 - 1 = truthy",() => {
    expect(1).toBeTruthy
})


test("chal 3- 0 = falsy",() => {
    expect(0).toBeFalsey
})


test("chal 5 - items should contain 6 or more characters. return 666666 and 7777777",() => {
    expect(longStrings([
        '1', 
        '22', 
        '333', 
        '4444', 
        '55555', 
        '666666', 
        '7777777'
    ])).toEqual(['666666', '7777777'])
})

// .toBe( )
// .toHaveLength( )
// .toEqual( )
// .toContain( )
// .toBeDefined( )
// .toHaveBeenCalled()
// .not.toBe()

//describe('desription for a group of tests', () => {
    //group of tests go in here
//}