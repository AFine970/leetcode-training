// 最长回文子串

var longestPalindrome = function (s) {
    if (s.length < 2) return s // 空串已经被返回
    let start = 0
    let maxlength = 1 // 空串已经被返回，所以这里最小的回文长度是1

    // 每次都根据左右两个指针尽可能的往外寻找最长的回文子串
    function helper(left, right) {
        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            if (right - left + 1 > maxlength) {
                maxlength = right - left + 1
                start = left
            }
            right++
            left--
        }
    }
    for (let i = 0; i < array.length; i++) {
        // 处理这种情况 'aba'
        helper(i - 1, i + 1)
        // 处理这种情况 'abba'
        helper(i, i + 1)
    }

    return s.substring(start, start + maxlength)
};