/**
 * @param {string} s
 * @return {boolean}
 * 551. 学生出勤记录一
 */
var checkRecord = function (s) {
    let absents = 0, lates = 0
    // 思路记录：1. 遇到缺勤就+1，次数大于等于2就取消评优；2. 遇到迟到就+1,下一次不是迟到就置为0, 次数大于等于3就取消评优
    for (let i = 0; i < s.length; i++) {
        let item = s[i]
        if (item === 'A') {
            absents++
            if (absents>=2) {
                return false
            }
        }

        if (item === 'L') {
            lates++
            if (lates>=3) {
                return false
            }
        } else {
            lates = 0
        }
    }

    return true
};

const s1 = "PPALLP"
// true
console.log(checkRecord(s1));

const s2 = "PPALLL"
// false
console.log(checkRecord(s2));