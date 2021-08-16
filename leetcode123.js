/**
 * @param {number[]} prices
 * @return {number}
 * 123. 买卖股票的最佳时机 III
 */
var maxProfit = function (prices) {
    if (!prices.length) return 0
    const dp = Array.from(Array(3), () => new Array(prices.length).fill(0))

    for (let i = 1; i < 3; i++) {
        let maxProfit = -prices[0]
        for (let j = 1; j < prices.length; j++) {
            // 本次的利润可以是：1.继承前一次的利润 2.本次卖出+之前的利润
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxProfit)
            // 更新之前卖出的最大利润
            maxProfit = Math.max(maxProfit, dp[i - 1][j] - prices[j])
        }
    }
    return dp[2][prices.length - 1]
};

const prices = [3, 3, 5, 0, 0, 3, 1, 4]
// 6
console.log(maxProfit(prices));