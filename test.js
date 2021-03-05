// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One euro is 127.9 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const Yen = fromDollarToYen(4)

    // if 1 euro is 127.9 Yen, then 4 euros should be (4 * 127.9)
    const expected = 4 * 127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(Yen);
})

test("One euro is 0.8 Pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const Pound = fromYenToPound(6.7)

    // if 1 euro is 0.8 Pounds, then 6.7 euros should be (6.7 * 0.8)
    const expected =  6.7 * 0.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(Pound);
})