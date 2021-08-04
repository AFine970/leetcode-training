/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 160. 相交链表
 */
var getIntersectionNode = function (headA, headB) {
    let dummyA = headA
    let dummyB = headB
    
    while (dummyA !== dummyB) {
        // dummyA走到链表A尽头，则从链表B开始走。dummyB同理
        if (dummyA === null) {
            dummyA = headB
        } else {
            dummyA = dummyA.next
        }

        //
        if (dummyB === null) {
            dummyB = headA
        } else {
            dummyB = dummyB.next
        }
    }
    
    return dummyA
};