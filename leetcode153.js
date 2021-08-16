/**
 * @param {number[]} nums
 * @return {number}
 * 153. 寻找旋转排序数组中的最小值
 */
var findMin = function (nums) {
    if (!nums.length || !nums) return
    let i = 0
    // 看看数组有没有被旋转，被旋转了的话，肯定有临界值
    while (i < nums.length) {
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1]
        } else {
            i++
        }
    }
    // 没有被旋转
    return nums[0]
};

const nums1 = [3, 4, 5, 1, 2]
// 1
console.log(findMin(nums1));

const nums2 = [4, 5, 6, 7, 0, 1, 2]
// 0
console.log(findMin(nums2));
