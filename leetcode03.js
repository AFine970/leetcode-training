// 无重复字符的最长子串

var lengthOfLongestSubstring = function (s) {
    let i = 0, j = 0
    let set = new Set()
    let maxlength = 0
    if (!s.length) return 0

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            // set 中的没有s[i]则添加
            set.add(s[i])
            // 判断最大不重复连续字符串的长度
            maxlength = Math.max(maxlength, set.size)
        } else {
            // set中有s[i],则说明有重复，需要把重复的字符串删掉
            while (set.has(s[i])) {
                // 为啥删掉s[j], 因为s[j]是原先s[i]走过的路径
                set.delete(s[j])
                j++
            }
            set.add(s[i])
        }
    }

    return maxlength
};