/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let curr = new ListNode()
    let dummy = curr

    while (l1.val !== null && l2.val !== null) {
        // 按照大小顺序连接
        if (l1.val < l2.val) {
            curr.next = l1
            // 移动指针
            l1 = l1.next
        } else {
            curr.next = l2
            // 移动指针
            l2 = l2.next
        }
        // 加上一个节点后，需要移动指针，否则后续的操作都是替换下一个节点
        curr = curr.next
    }

    // 判断 l1 是否还有节点
    if (l1 !== null) {
        curr.next = l1
    }

    // 判断 l2 是否还有节点
    if (l2 !== null) {
        curr.next = l2
    }

    return dummy.next
};