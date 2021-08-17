/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 108. 将有序数组转换为二叉搜索树
 * 思路：为了达到平衡二叉树的目的，每次都是以中点为根节点创建二叉树，因此可以利用递归
 */
var sortedArrayToBST = function (nums) {
    function helper(nums, left, right) {
        if (left > right) return null
        // 每次都已中点作为根节点
        const middle = Math.floor(left + (right - left) / 2)
        const root = new TreeNode(nums[middle])
        // 递归拿到左右子节点
        root.left = helper(nums, left, middle - 1)
        root.right = helper(nums, middle + 1, right
        )

        return root
    }

    return helper(nums, 0, nums.length - 1)
};

// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]
// 解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案

// 输入：nums = [1,3]
// 输出：[3,1]
// 解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。