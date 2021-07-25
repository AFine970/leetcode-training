/**
 * @param {ListNode} head
 * @return {ListNode}
 * 两两交换链表中的节点
 */
var swapPairs = function (head) {
    let dummy = new ListNode()
    dummy.next = head
    let current = dummy

    while (current.next !== null && current.next.next !== null) {
        // 关键点 n1 / n2 在循环中定义，保证 current / n1 / n2的顺序是连续的
        let n1 = current.next
        let n2 = current.next.next
        // 开始交换
        current.next = n2
        n1.next = n2.next
        n2.next = n1

        // 继续下一轮的交换
        current = n1
    }

    return dummy.next
};