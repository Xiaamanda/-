/* 判断链表中是否有环：立falg */
var hasCycle = function(head) {
    while(head){
        if(head.flag){
            return true
        }else{
            head.flag =true
            head = head.next
        }
    }
    return false
}
