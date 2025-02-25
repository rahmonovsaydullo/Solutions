// https://leetcode.com/problems/a-number-after-a-double-reversal/description/


isSameAfterReversals = function (num) {

    let reversed = ''
    let stringNum = num.toString()
    if (num === 0) {
        return true
    } else if (stringNum.endsWith(0)) {
        return false
    }
    for (let i = stringNum.length - 1; i >= 0; i--) {
        reversed += stringNum[i]
    }
    return reversed
}

console.log(isSameAfterReversals(526));
