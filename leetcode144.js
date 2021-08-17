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
 * 144. 二叉树的前序遍历
 */
// 递归写法
var preorderTraversal = function (root) {
    const res = []
    // 前序遍历，首先查找左子树
    const preorder = function (root) {
        if (root === null) return
        res.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }

    preorder(root)
    return res
};

// 迭代写法
var preorderTraversal2 = function (root) {
    const res = [], stack = []
    while (root || stack.length) {
        while (root) {
            // 先把左子树的值按按顺序存起来
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }

    return res
}