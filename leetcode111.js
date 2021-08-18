/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 111. 二叉树的最小深度
 */
var minDepth = function (root) {
    if (root === null) {
        return 0
    }

    // 叶子节点
    if (root.left === null && root.right === null) {
        return 1
    }
    
    // 将min初始化为最大整形数，为了能拿到最小值
    let min = Number.MAX_SAFE_INTEGER
    
    if (root.left !== null) {
        min = Math.min(minDepth(root.left), min)
    }

    if (root.right !== null) {
        minDepth = Math.min(minDepth(root.right), minDepth)
    }

    return min + 1
};