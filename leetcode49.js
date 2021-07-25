/**
 * @param {string[]} strs
 * @return {string[][]}
 * 49. 字母异位词分组
 */
var groupAnagrams = function (strs) {
    if (!strs.length) return []

    let map = new Map()

    for (const str of strs) {
        // 创建一个26字母的数组
        let letters = Array(26).fill(0)
        for (let i = 0; i < str.length; i++) {
            // 使用 ascii 码计算出字母的位置
            const ascii = str.charCodeAt(i) - 97
            letters[ascii]++
        }
        
        // 转换成字符串比较
        const key = letters.join()
        console.log(key)
        if (map.has(key)) {
            map.set(key, [...map.get(key), str])
        } else {
            map.set(key, [str])
        }
    }

    return [...map.values()]
};

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))