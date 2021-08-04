/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 283. 移动零
 */
var moveZeroes = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        // i指针指向的数不为0的时候，将指针i指向的数赋值给指针j指向的数，j++
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j++
        }
    }

    // 将不为0的数移动完毕之后，将数组之后的数置为0
    while (j < nums.length) {
        nums[j] = 0
        j++
    }

    return nums
};


const input = [0, 1, 0, 3, 12]
// [1,3,12,0,0]

console.log(moveZeroes(input));