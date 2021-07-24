/**
 * 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums.length) return nums
    let result = []
    // 排序是为了更好的处理重复的数
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let start = i + 1, end = nums.length - 1
            while (start < end) {
                if (nums[i] + nums[start] + nums[end] === 0) {
                    // 等于0
                    result.push([nums[i], nums[start], nums[end]])
                    start++
                    end--
                    // 判断当前的start指向的数和上一个数是不是一样的，一样则跳过
                    while (start < end && nums[start] === nums[start - 1]) {
                        start++
                    }
                    // 判断当前的end指向的数和上一个数是不是一样的，一样则跳过
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--
                    }
                } else if (nums[i] + nums[start] + nums[end] < 0) {
                    // 小于0，移动start，寻找更大的数
                    start++
                } else {
                    // 大于0，移动end，寻找更小的数
                    end--
                }
            }
        }
    }
    return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));