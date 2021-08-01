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
 * 83. 删除排序链表中的重复元素
 */
var deleteDuplicates = function (head) {
    let dummy = new ListNode()
    dummy.next = head

    while (head !== null && head.next !== null) {
        if (head.val === head.next.val) {
            // 删除相同的节点（链表中删除就是跳过）
            head.next = head.next.next
        } else {
            head = head.next
        }
    }

    return dummy.next
};