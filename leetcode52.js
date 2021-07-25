/**
 * @param {number[]} nums
 * @return {number}
 * 53. 最大子序和
 */
var maxSubArray = function (nums) {
    let memo = []
    memo[0] = nums[0]
    let max = nums[0]

    // 循环的下标从1开始避免越界
    for (let i = 1; i < nums.length; i++) {
        // 动态规划，进行抉择（添加下一个数，判断合和下一个数，谁更大？更大，那么添加；否则，以下一个数创建新的数组）
        memo[i] = Math.max(nums[i] + memo[i - 1], nums[i])
        max = Math.max(max, memo[i])
    }

    return max
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));