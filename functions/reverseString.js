
const reverseString = (str) => {
    if(typeof str !== 'string'){
        return 'Input must be a string'
    }
    if(str === ''){
        return 'Input should be a non-empty string'
    }
    return str.split('').reverse().join('')
}

module.exports = reverseString