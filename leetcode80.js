/**
 * @param {number[]} nums
 * @return {number}
 * 80. 删除有序数组重复的元素二
 * 字节跳动一面考过，但是出题的描述不清晰，但是根本上就是这道题
 * 关键点：有序数组、只需要输出排序后数组的下标
 */
var removeDuplicates = function (nums) {
    let len = nums.length
    if (len === 2) return 2
    let slow = 2, fast = 2
    while (fast < len) {
        // 判断快指针指向的数与慢指针指向的前两个数是否相同
        if (nums[fast] !== nums[slow - 2]) {
            // 不相等，则说明找到了需要保留的数
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }

    return slow
};

const nums = [1, 1, 1, 2, 2, 3]
// 输出：5, nums = [1,1,2,2,3]

console.log(removeDuplicates(nums));