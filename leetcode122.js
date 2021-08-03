/**
 * @param {number[]} prices
 * @return {number}
 * 122. 买卖股票的最佳时机 II
 */
var maxProfit = function (prices) {
    let prefix = 0
    if (!prices.length) return prefix
    let curr = prices[0]
    for (let i = 0; i < prices.length; i++) {
        const item = prices[i]
        let result = item - curr
        // 有利润就加起来
        if (result > 0) {
            prefix = prefix + result
            // prefix = Math.max(prefix, result)
        }
        // curr逐步递增
        curr = item
    }
    return prefix
};


// const prices = [7, 1, 5, 3, 6, 4]
// const prices = [1, 2, 3, 4, 5]
const prices = [7, 6, 4, 3, 1]


let prefix = maxProfit(prices)
console.log('prefix', prefix);