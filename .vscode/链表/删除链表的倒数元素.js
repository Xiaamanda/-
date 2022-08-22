/* 双指针法之快慢指针：
使用一次遍历解决问题，注意循环的条件
 */
var removeNthFromEnd = function(head, n) {
    let link = new ListNode(0,head)
    let slow = link
    let fast = link
    while (n>0) {
        fast = fast.next
        n--
    }
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }
    slow.next = fast
    return link.next
};