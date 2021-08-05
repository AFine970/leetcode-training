/**
 * @param {number[]} nums
 * @return {number}
 * 198. 打家劫舍
 * 非常典型的动态规划题目
 */
var rob = function (nums) {
    if (!nums.length) return 0
    if (nums.length === 1) return nums[0]
    // 创建一个收集表
    const dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    let max = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        // 偷与不偷 进行抉择
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
        max = Math.max(max, dp[i])
    }

    return max
};

// const nums = [1, 2, 3, 1]
// 4

// const nums = [2, 7, 9, 3, 1]
// 12

// const nums = [1, 2]
// 2

// const nums = [2, 1, 1, 2]
// 4

// const nums = [1, 3, 1, 3, 100]
// 103

console.log(rob(nums));
