/**
 * @param {number[]} nums
 * @return {number[]}
 * 922. 按奇偶排序数组 II
 */
var sortArrayByParityII = function (nums) {
    // 奇数
    function isOdd(num) {
        return num % 2 === 1
    }
    // 双指针，间隔一步往后走
    let j = 1
    for (let i = 0; i < nums.length; i+=2) {
        // 当i指向的数为奇数的时候，需要j指向一个偶数
        if (isOdd(nums[i])) {
            while (isOdd(nums[j]) && j < nums.length) {
                j += 2
            }

            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

    return nums
};

const nums = [4, 2, 5, 7]
//[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
console.log(sortArrayByParityII(nums));