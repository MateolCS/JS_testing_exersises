const capitalize = require('../functions/capitalize');

test('Makes a first letter capitalized', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('hello world')).toBe('Hello world')
    expect(capitalize('123')).toBe('123')
})