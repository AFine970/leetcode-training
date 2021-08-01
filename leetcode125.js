/**
 * @param {string} s
 * @return {boolean}
 * 125. 验证回文数
 */
var isPalindrome = function (s) {
    s = s.replace(/[\W_]/g, '').toLowerCase()
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false
        }
    }
    return true
};

const result1 = isPalindrome("A man, a plan, a canal: Panama")
console.log(result1);

const result2 = isPalindrome("ab_a")
console.log(result2);