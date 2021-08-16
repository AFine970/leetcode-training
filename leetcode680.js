/**
 * @param {string} s
 * @return {boolean}
 * 680. 验证回文字符串 Ⅱ
 */
var validPalindrome = function (s) {
    // 判断是否是回文数
    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false
            }
            left++
            right--
        }

        return true
    }

    let left = 0, right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) {
            // 不相等的情况下，左移一位、右移一位
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1)
        }
        left++
        right--
    }

    return true
};

// const s1 = "aba"
// // true
// const s2 = "abca"
// // true
// const s3 = "abc"
// // false
// const s4 = "cbbcc"
// true
const s5 = "eeccccbebaeeabebccceea"
// false

const s6 = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
// true

// console.log(validPalindrome(s1));
// console.log(validPalindrome(s2));
// console.log(validPalindrome(s3));
// console.log(validPalindrome(s4));
console.log(validPalindrome(s5));
console.log(validPalindrome(s6));