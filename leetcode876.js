/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 876. 链表的中间节点
 */
var middleNode = function (head) {
    let slow = head
    let fast = head
    // fast !== null 表示fast没有到达最后的空节点
    // fast.next !== null 表示fast不是最后一个节点
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // 声明一个快慢指针，慢指针一次走1步，快指针一次走2步， 走过的路径为 1:2 ，即slow指针停下的就是链表的中间节点

    return slow
};