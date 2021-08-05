/**
 * @param {string} s
 * @return {string[]}
 * 187. 重复的DNA序列
 */
var findRepeatedDnaSequences = function (s) {
    let i = 0
    let j = 9
    const map = new Map()
    const result = []
    while (j < s.length) {
        str = s.substring(i, j)
        // if (map.has()) {
        //     result.push(map.get())
        // } else {

        // }
        // 字母表
        const alphabet = Array(26).fill(0)

        for (let k = 0; k < str.length; k++) {
            let ascii = str.toLowerCase().charCodeAt(k)
            alphabet[ascii]++
        }

        const key = alphabet.join()
        
        if (map.has(key)) {
            map.get(key).push(str)
        } else {
            map.set(key, [str])
        }

        i++
        j++
    }

    console.log('map', map.values());
};

const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
findRepeatedDnaSequences(s)