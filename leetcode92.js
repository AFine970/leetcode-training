/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 92. 反转链表 II
 */
var reverseBetween = function (head, left, right) {
    // 思路：
    //     1. 将left--right区间的链表反转
    //     2. 将反转后的链表和原来的链表拼接

    if (left === right) {
        return head
    }

    // 反转链表必声明三个指针 
    let prev = null
    let curr = head
    let next = head

    for (let i = 1; i < left; i++) {
        prev = curr
        curr = curr.next
    }

    let prev2 = prev
    let curr2 = curr

    let i = left
    while (i <= right) {
        next = curr.next // 首先移动next
        curr.next = prev // 其次改变curr的指向
        prev = curr // 移动prev
        curr = next // 移动curr
        i++
    }

    // 反转完成后，和原来的链表拼接
    if (prev2 !== null) {
        // 反转后链表的前一个位置
        prev2.next = prev
    } else {
        // 从1开始反转的情况
        head = prev
    }

    // 反转后链表的尾部
    curr2.next = curr

    return head
};