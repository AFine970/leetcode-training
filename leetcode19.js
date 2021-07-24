
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 删除倒数第N个节点
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode()
    dummy.next = head

    let i = dummy
    let j = dummy

    // 将 j 移动 n 个位置
    for (let index = 0; index <= n; index++) {
        j = j.next
    }

    // 当 j 走到最后一个节点
    while (j !== null) {
        i = i.next
        j = j.next
    }

    // 删掉第n个节点
    i.next = i.next.next

    return dummy.next
};
