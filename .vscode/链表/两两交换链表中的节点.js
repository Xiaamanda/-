/* 迭代法+双指针法:
pre指向第一个结点，cur指向第二个结点，实际处理的是dummy结点后面的两个节点
注：迭代的指针更新顺序应该为从后向前
 */
var swapPairs = function(head) {
    // 使用dummy节点
    let link = new ListNode(0,head)
    let dummy = link
    // 当dummy后面有没有节点或只有一个节点时，则不进行迭代
    while(dummy.next&&dummy.next.next){
        let cur = dummy.next.next
        let pre = dummy.next
        
        pre.next = cur.next
        cur.next =  pre
        dummy.next = cur
        
        dummy = pre
    }
    return link.next
}
