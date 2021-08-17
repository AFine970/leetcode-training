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
 * 94. 二叉树的中序遍历
 */
// 使用栈的写法：迭代
var inorderTraversal = function (root) {
    const result = []
    const stack = []
    while (root || stack.length) {
        // 先压入左子树
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        result.push(root.val)
        root = root.right
    }

    return result
};

// 中序遍历：递归写法
var inorderTraversal2 = function (root) {
    const result = []

    const inorder = function (root) {
        if (!root) return
        inorder(root.left)
        result.push(root.val)
        inorder(root.right)
    }

    return result
}