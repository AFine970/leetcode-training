/**
 * @param {number} n
 * @return {number}
 * 509. 斐波那契数列
 */
var fib = function (n) {
    // 非常经典的动态规划的题目
    // 简单来说，动态规划就是：递归 + 路径记忆
    if (n === 0) return 0
    if (n === 1) return 1

    let curr = 0, prev = 1, res = 0
    
    for (let i = 2; i <= n; i++) {
        res = curr + prev
        curr = prev
        prev = res
    }

    return res
};

console.log(fib(2));
// 1
console.log(fib(3));
// 2
console.log(fib(4));
// 3