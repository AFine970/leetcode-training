/**
 * @param {number[]} prices
 * @return {number}
 * 121. 买卖股票的最佳时机
 */
var maxProfit = function (prices) {
    let perfix = 0 // 利润
    let curr = prices[0] // 买入点

    for (let i = 0; i < prices.length; i++) {
        let result = prices[i] - curr
        if (result >= 0) {
            perfix = Math.max(perfix, prices[i] - curr)
        } else {
            curr = prices[i]
        }
    }

    return perfix
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
