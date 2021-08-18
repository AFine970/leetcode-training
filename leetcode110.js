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
 * @return {boolean}
 * 110. 平衡二叉树
 */
var isBalanced = function (root) {
    function height(root) {
        // 递归的终止条件
        if (root === null) return 0
        // 递归比较左右子节点的高度
        let leftHeight = height(root.left)
        let rightHeight = height(root.right)
        
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1
        } else {
            return Math.max(leftHeight, rightHeight) + 1
        }
    }

    return height(root) >= 0
};