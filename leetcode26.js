/**
 * @param {number[]} nums
 * @return {number}
 * 26. 删除有序数组中的重复项
 */
var removeDuplicates = function (nums) {
    const len = nums.length
    if (len === 0) return 0
    let slow = 1, fast = 1

    while (fast < len) {
        // 判断快指针当前和前一项是否相等，不相等则赋值给慢指针指向的数
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            ++slow
        }
        // 否则快指针继续向前走
        ++fast
    }

    return slow
};

const nums = [1, 1, 2]
// 输出：2, nums = [1,2]

console.log(removeDuplicates(nums));