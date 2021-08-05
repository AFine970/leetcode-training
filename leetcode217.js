/**
 * @param {number[]} nums
 * @return {boolean}
 * 217. 存在重复元素
 */
var containsDuplicate = function (nums) {
    const set = new Set(nums)
    return set.size !== nums.length 
};
