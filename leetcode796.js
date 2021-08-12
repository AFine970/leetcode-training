/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * 796. 旋转字符串
 */
var rotateString = function (s, goal) {
    // 解决非常巧妙，s字符串旋转了N的结果，都会包含在 s + s 字符串中
    if (s.length !== goal.length) return false
    return s.repeat(2).indexOf(goal) !== -1
};

// const s = "abcde", goal = "abced"
// false

const s = "abcde", goal = "cdeab"
// true

console.log(rotateString(s, goal))