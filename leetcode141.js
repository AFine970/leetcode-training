/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 141. 环形链表
 */
var hasCycle = function (head) {
    let map = new Map()
    let curr = head
    while (curr !== null) {
        if (map.has(curr.next)) {
            return true
        } else {
            map.set(curr.next, curr.val)
        }
        curr = curr.next
    }

    return false
};