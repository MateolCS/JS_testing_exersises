const analizeArray = require('../functions/objectTesting.js');

test('Should return an object with the min, max, length and average of the array', () => {
    expect(analizeArray([1, 2, 3, 4, 5])).toEqual({min: 1, max: 5, length: 5, average: 3});
})