/* 删除链表中等于给定值的元素：
注意移除第一个节点与其他节点不一样，一般的节点移除都依赖于该节点的前一个节点，为处理移除第一个节点的特殊情况，可单独对头节点进行判断，或设置dummy节点
*/

/* 设置dummy节点 */
var removeElements = function (head, val) {
    // dummy节点的设置
    const ret = new ListNode(0, head)
    var curNode = ret
    while (curNode.next !== null) {
        if (curNode.next.val == val) {
            curNode.next = curNode.next.next
            continue
        }
        curNode = curNode.next
    }
    return ret.next
};

/* 单独对第一个节点进行判断 */
var removeElements = function (head, val) {
    // 处理头部节点
    while (head !== null && head.val == val) {
        head = head.next
    }
    if (head == null) return head
    // 处理非头部节点
    let pre = head
    let curNode = head.next
    while (curNode) {
        if (curNode.val == val) {
            pre.next = curNode.next
        } else {
            pre = pre.next
        }
        curNode = curNode.next
    }
    return head
};