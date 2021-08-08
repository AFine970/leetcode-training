/**
 * @param {string} s
 * @return {string[]}
 * 187. 重复的DNA序列
 */
var findRepeatedDnaSequences = function (s) {
    const set = new Set(), result = new Set()
    let i = 0
    while (i + 10 <= s.length) {
        const dna = s.substring(i, i + 10)

        if (!set.has(dna)) {
            set.add(dna)
        } else {
            result.add(dna)
        }

        i++
    }

    return Array.from(result.values())
};

const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// ["AAAAACCCCC","CCCCCAAAAA"]
// const s = "AAAAAAAAAAA"
//["AAAAAAAAAA"]
console.log(findRepeatedDnaSequences(s))
