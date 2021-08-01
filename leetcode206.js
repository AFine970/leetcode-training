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
 * 206. 反转链表（画图辅助来做题是最好的）
 */
var reverseList = function (head) {
    // 声明三个指针
    let prev = null
    let curr = head
    let next = head
    while (head !== null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
};