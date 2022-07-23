
const analizeArray = (array) => {

    return {min: Math.min(...array), max: Math.max(...array), length: array.length, average: array.reduce((a, b) => a + b, 0) / array.length};
}

module.exports = analizeArray;