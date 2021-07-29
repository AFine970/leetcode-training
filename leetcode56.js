/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 56.合并区间
 */
var merge = function (intervals) {
    // 首先排序
    intervals.sort((a, b) => a[0] - b[0])

    let curr = intervals[0]
    let result= []

    for (let i = 1; i < intervals.length; i++) {
        const element = intervals[i]
        if (curr[1] >= element[0]) {
            curr[1] = Math.max(element[1], curr[1])
        } else {
            result.push(curr)
            curr = element
        }
    }

    if (curr.length) {
        result.push(curr)
    }

    return result
};

// 测试用例
const data = [[1,3],[2,6],[8,10],[15,18]]

// [[1,6],[8,10],[15,18]]

console.log(merge(data));
