/*链表的相交： 要注意是末尾对齐的相交，处理两个链表不同长度 */
var getIntersectionNode = function (headA, headB) {
    let cur1 = headA
    let cur2 = headB
    let A = 0
    let B = 0

    // 求两个链表的长度
    while (cur1) {
        cur1 = cur1.next
        A++
    }
    while (cur2) {
        cur2 = cur2.next
        B++
    }

    //让两个链表从头开始
    cur1 = headA
    cur2 = headB

    // 根据两个链表长度进行对比
    // 让A始终代表长度较长的链表
    if (A < B) {
        [cur1, cur2] = [cur2, cur1];//分号的重要性
        [A, B] = [B, A]
    }
    let i = A - B
    while (i > 0) {
        cur1 = cur1.next
        i--
    }
    while (cur1 && cur1 !== cur2) {
        cur1 = cur1.next
        cur2 = cur2.next
    }
    return cur1
}