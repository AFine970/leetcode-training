/**
 * @param {number} n
 * @return {number}
 * 70. 爬楼梯
 */
var climbStairs = function (n) {
    let map = new Map()
    map.set(1, 1)
    map.set(2, 2)
    function solution(n) {
        if (map.has(n)) {
            return map.get(n)
        }
        let res = solution(n - 2) + solution(n - 1)

        map.set(n, res)

        return res
    }

    return solution(n)
};

// 测试用例
climbStairs(20)
// 10946