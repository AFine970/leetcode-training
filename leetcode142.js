/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 142. 环形链表二
 */
 var detectCycle = function (head) {
    let map = new Map()
    let curr = head
    while(curr !== null) {
        if (map.has(curr)) {
            return map.get(curr)
        } else {
            map.set(curr, curr)
        }
        curr = curr.next
    }
    // 没有环
    return null
};