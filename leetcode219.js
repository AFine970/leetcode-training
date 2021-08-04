/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 219. 存在重复元素 II
 */
var containsNearbyDuplicate = function (nums, k) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        // 先进行抉择，再将值填入map
        if (map.has(nums[i]) && (i - map.get(nums[i])) <= k) {
            return true
        } else {
            map.set(nums[i], i)
        }
    }

    return false
};

// const nums = [1, 2, 3, 1], k = 3
// false

const nums = [1, 0, 1, 1], k = 1
// true

// const nums = [1, 2, 3, 1, 2, 3], k = 2
// true

console.log(containsNearbyDuplicate(nums, k))