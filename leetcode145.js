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
 * @return {number[]}
 * 145. 二叉树的后序遍历
 */

// 递归
var postorderTraversal = function (root) {
    const res = []
    const postorder = function (root) {
        if (root === null) return
        // 先查找右子节点
        postorder(root.left)
        postorder(root.right)
        // 谁先被递归到，谁就会被取值
        res.push(root.val)
    }

    postorder(root)
    return res
};

// 迭代
var postorderTraversal2 = function (root) {
    const res = [], stack = [], prev = TreeNode(null)
    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (root.right === null || root.right === prev) {
            res.push(root.val)
            prev = root
            root = null
        } else {
            // 右子树不为空节点，则继续入栈
            stack.push(root)
            root = root.right
        }
    }

    return res
}