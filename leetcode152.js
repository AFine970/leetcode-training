/**
 * @param {number[]} nums
 * @return {number}
 * 152. 乘积最大子数组（动态规划）
 */
var maxProduct = function (nums) {
    // 整两个表存储最大连续序列的乘积最小连续序列的乘积（为啥整一个最小连续序列的乘积，因为负负得正，可能有咸鱼翻身的机会）
    const maxProductDp = []
    const minProductDp = []

    maxProductDp[0] = nums[0]
    minProductDp[0] = nums[0]

    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        maxProductDp[i] = Math.max(nums[i], maxProductDp[i - 1] * nums[i], minProductDp[i - 1] * nums[i])

        minProductDp[i] = Math.min(nums[i], maxProductDp[i - 1] * nums[i], minProductDp[i - 1] * nums[i])

        max = Math.max(maxProductDp[i], max)
    }

    return max
}

const nums = [2, 3, -2, 4]
// 6

console.log(maxProduct(nums));