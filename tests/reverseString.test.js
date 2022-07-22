const reverseString = require('../functions/reverseString')

test('Should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('Should return an error if input is not a string', () =>{
    expect(reverseString(1100)).toBe('Input must be a string');
})

test('Should return an error if input is an empty string', () =>{
    expect(reverseString('')).toBe('Input should be a non-empty string');
})