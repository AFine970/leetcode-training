/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 844. 比较含退格的字符串
 */
var backspaceCompare = function (s, t) {
    // 使用两个栈来解决这个问题，遇到 “#” 就出栈，否则就入栈
    let stackS = []
    let stackT = []
    for (let i = 0; i < s.length; i++) {
        const element = s[i]
        if (element === '#') {
            stackS.pop()
        } else {
            stackS.push(element)
        }
    }

    for (let j = 0; j < t.length; j++) {
        const element = t[j]
        if (element === '#') {
            stackT.pop()
        } else {
            stackT.push(element)
        }
    }

    return stackS.join() === stackT.join()
};

const S = "ab#c", T = "ad#c"
// true
console.log(backspaceCompare(S, T));
