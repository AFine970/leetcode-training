/**
 * @param {number[]} digits
 * @return {number[]}
 * 61. 加一
 */
var plusOne = function (digits) {
    // 个位加一，数组从后往前循环
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++
            return digits
        } else {
            digits[i] = 0
        }
    }
    // 代码到这还能执行，说明数组的每一项全部都是9
    digits.unshift(1)
    return digits
};

console.log(plusOne([9]));
