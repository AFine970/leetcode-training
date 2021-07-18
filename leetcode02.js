// 两数相加
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode()
    let curr = dummy
    let carry = 0 // 进位
    while (l1 !== null || l2 !== null) {
        let sum = 0
        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }

        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }
        sum += carry
        let remainder = sum % 10 // 余数
        carry = Math.floor(sum / 10) // 进位
        curr.next = new ListNode(remainder)
        curr = curr.next
    }

    if (carry > 0) {
        curr.next = new ListNode(carry)
    }

    return dummy.next
};