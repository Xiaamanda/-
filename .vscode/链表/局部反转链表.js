var reverseBetween = function(head, left, right) {
    /* 多指针法：pre指向当前节点的前驱，cur指向当前节点,post指向后继节点，leftHead指向整个left,right区间的前驱节点 */
    let dummy = new ListNode()
    dummy.next = head
    let pre,cur,post,leftHead
    let p = dummy //p为游标，用于遍历

    // p往前走m-1步，至m节点的前驱节点
    for(let i = 0; i < left -1;i++){
        p = p.next
    }

    // 缓存该节点至leftHead
    leftHead = p

    // start 为反转区间的第一个结点
    let startNode = leftHead.next
    pre = startNode
    cur = pre.next
    for(let i = left;i<right;i++){
        post = cur.next
        cur.next = pre

        pre = cur
        cur =post
    }
    leftHead.next = pre
    startNode.next = cur
    return dummy.next
};