const caesarCipher = require('../functions/caesarCipher')

test('Should return a string with shifted letters', () => {
    expect(caesarCipher('abcdef', 1)).toBe('bcdefg')
})

test('Should return a string with shifted letter and with proper case', ()=>{
    expect(caesarCipher('Karol', 1)).toBe('Lbspm')
})

test('Should work with multiple words', () =>{
    expect(caesarCipher('Look ma no hands', 1)).toBe('Mppl nb op iboet')
})

test('Should work with sentences with punctuation', () =>{
    expect(caesarCipher('Look, ma no hands!', 1)).toBe('Mppl, nb op iboet!')
})