/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 704. 二分查找（经典的题，必记）
 */
var search = function (nums, target) {
    // 必须双指针进行解题，否则采用数组会内存溢出
    let left = 0, right = nums.length - 1
    while(left <= right) {
        // 这里的middle不是取距离的一半，而是取中间的下标
        let middle = Math.floor(left + (right - left) / 2)
        if (nums[middle] === target) {
            // 相等直接返回
            return middle
        } else if (nums[middle] < target) {
            // 目标的数在右边
            left = middle + 1
        } else {
            // 目标的数在左边
            right = middle - 1
        }
    }

    return -1
}

const array = [-1, 1, 5, 6, 7, 8, 9], key = 5

const result = search(array, key)
console.log('result', result);