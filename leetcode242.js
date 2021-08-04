/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 242. 字母异位词
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let sArr = Array(26).fill(0)
    let tArr = Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i)
        sArr[ascii - 97]++
    }

    for (let i = 0; i < t.length; i++) {
        const ascii = t.charCodeAt(i)
        tArr[ascii - 97]++
    }

    console.log(sArr);
    console.log(tArr);

    return sArr.join() === tArr.join()
};


// const s = "anagram", t = "nagaram"
// true

const s = "rat", t = "car"
// false

console.log(isAnagram(s, t));