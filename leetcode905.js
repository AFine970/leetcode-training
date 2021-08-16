/**
 * @param {number[]} nums
 * @return {number[]}
 * 905. 按奇偶排序数组，返回偶数在前基数在后的数组
 */
var sortArrayByParity = function (nums) {
    // 基数
    function isOdd(num) {
        return num % 2 !== 0
    }
    // 偶数
    function isEven(num) {
        return num % 2 === 0
    }
    // 双指针往中间走
    let i = 0, j = nums.length - 1
    while (i < j) {
        if (isOdd(nums[i]) && isEven(nums[j])) {
            // 奇数-偶数
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        } else if (isEven(nums[i]) && isEven(nums[j])) {
            // 偶数-偶数
            i++
        } else if (isEven(nums[i]) && isOdd(nums[j])) {
            // 偶数-奇数
            i++
            j--
        } else {
            // 奇数-奇数
            j--
        }
    }

    return nums
};

const nums = [3, 1, 2, 4]
// [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。

console.log(sortArrayByParity(nums));