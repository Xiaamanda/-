/* 判断有无环，若有环，找到入环的起始节点
入环的起点一定是第一个标记为falg的点
*/
// 也可用Map来存储flag
const detectCycle = function(head) {
    while(head){
        if(head.flag){
            return head;
        }else{
            head.flag = true;
            head = head.next;
        }
    }
    return null;
};

/*快慢指针  */