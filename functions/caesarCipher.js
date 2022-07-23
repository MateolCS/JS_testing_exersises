
const caesarCipher = (str, shift) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90) {
        newStr += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
        newStr += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
        newStr += str[i]
        }
    }
    return newStr
}

module.exports = caesarCipher