/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 445. 两数相加 II
 * 同类题目 2. 两数相加
 */
var addTwoNumbers = function (l1, l2) {
    // 加法运算从后到前，而单链表的顺序是从前往后，那么久采用栈的方式来处理
    let dummy = null, carry = 0, stack1 = [], stack2 = []

    while (l1 !== null) {
        stack1.push(l1.val)
        l1 = l1.next
    }
    while (l2 !== null) {
        stack2.push(l2.val)
        l2 = l2.next
    }

    while (stack1.length !== 0 || stack2.length !== 0) {
        let sum = 0
        // 将取值操作放在while循环中，一方面是为了循环能正常进行，一方面是为了处理两个单链表长度不一致的问题
        if (stack1.length !== 0) {
            sum += stack1.pop()
        }
        
        if (stack2.length !== 0) {
            sum += stack2.pop()
        }

        sum += carry
        carry = Math.floor(sum / 10)
        const bit = sum % 10
        const node = new ListNode(bit)
        node.next = dummy
        dummy = node
    }

    if (carry !== 0) {
        const node = new ListNode(carry)
        node.next = dummy
        dummy = node
    }
    
    console.log('111', dummy)
    return dummy
};
