/**
 * @param {number[]} nums
 * @return {number[]}
 * 238. 除自身以为数组的乘积（经典的dp）
 */
var productExceptSelf = function (nums) {
    let dp = Array(nums.length).fill(1) // 初始化乘积数组

    let product = 1 // 初始化乘积
    // 从前往后
    for (let i = 0; i < nums.length; i++) {
        // 错开一个位置相乘
        dp[i] = product * dp[i]
        product = product * nums[i]
    }

    product = 1
    // 从后往左
    for (let i = nums.length - 1; i >= 0; i--) {
        dp[i] = product * dp[i]
        product = product * nums[i]
    }

    return dp
};

const nums = [1, 2, 3, 4]
// [24,12,8,6]
console.log(productExceptSelf(nums));