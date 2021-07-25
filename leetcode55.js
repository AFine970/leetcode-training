/**
 * @param {number[]} nums
 * @return {boolean}
 * 55. 跳跃游戏
 */
var canJump = function (nums) {
    // 目标下标 = 终点的下标
    let maxJump = nums.length - 1

    // 从倒数第二个位置往前循环
    for (let i = nums.length - 2; i >= 0; i--) {
        // 判断 当前的位置 + 能跳跃的步数  能否到达 当前目标下标
        if (nums[i] + i >= maxJump) {
            // 能到达，将目标下标设置为当前节点的下标
            maxJump = i
        }
    }
    
    // 判断能否到达起点
    return maxJump === 0
};

const nums = [2, 3, 1, 1, 4]

console.log(canJump(nums));