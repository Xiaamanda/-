/* 双指针法：left指向当前节点的前驱，temp指向当前节点的后继 */
var reverseList = function(head) {
    let curNode = head
    let temp
    let left = null
    if(!head.next || !head) return head
    while(curNode.next){
        temp = curNode.next
        curNode.next = left

        left = curNode
        curNode = temp
    }
    return left
};

/*递归法:从前往后翻转next指针*/
var reverse = function(pre, head) {
    if(!head) return pre;
    const temp = head.next;
    head.next = pre;
    pre = head
    return reverse(pre, temp);
}

var reverseList = function(head) {
    return reverse(null, head);
};

/* 递归法：从后往前翻转next指针 */
var reverse = function(head) {
    if(!head || !head.next) return head;
    // 从后往前翻
    const pre = reverse(head.next);
    head.next = pre.next;
    pre.next = head;
    return head;
}

var reverseList = function(head) {
    let curNode = head;
    while(curNode && curNode.next) {
        curNode = curNode.next;
    }
    reverse(head);
    return cur;
};