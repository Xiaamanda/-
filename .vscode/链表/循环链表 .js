
/* 循环链表：链表首尾相连 */
// 实现链表结点
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 实现链表主体
class singleLinked {
    constructor() {
        this.head = new Node('head')  //记录链表的头指针
        this.head.next = this.head  //循环链表需要首尾相连
        this.size = 0 //用来记录单链表的长度或结点个数
        this.curNode = ''//记录当前结点
    }

    // 获取链表的长度
    getLength() {
        return this.size
    }

    // 判断链表是否为空
    isEmpty() {
        return this.size === 0
    }

    // 查找指定节点
    find(target) {
        var curNode = this.head
        while (curNode.val != target) {
            curNode = curNode.next
        }
        return curNode
    }

    // 查找指定节点的前一个节点
    findPreious(target) {
        var curNode = this.head
        while (curNode.next.val != target) {
            curNode = curNode.next
        }
        return curNode
    }

    // 在指定节点后面插入节点(先设置该节点的next，再设置前面节点的next指向被插入节点)
    insert(newNode, target) {
        var newNode = new Node(newNode)
        var curNode = this.find(target)
        newNode.next = curNode.next
        curNode.next = newNode
    }

    // 遍历链表
    disPlayList() {
        var list = ''
        var curNode = this.head //从链表的头指针开始
        while (curNode!==null) {
            list += curNode.val
            // 让当前结点的指针指向下一节点
            curNode = curNode.next
        }
        console.log(list)
    }

    // 获取链表最后一个结点
    findLast() {
        var curNode = this.head
        while (curNode.next&&curNode.next.val!=="head") {
            curNode = curNode.next
        }
        return curNode
        
    }

    //删除结点（关键点：找到被删除结点的前驱结点）
    deleteNode(target) {
        // 首先遍历，找到需要删除的结点位置
        //方法一：此时curNode为目标结点
       /*  var leftNode = null
        var currNode = this.head
        while (currNode.val != target) {
            leftNode = currNode
            currNode = currNode.next
        }
        leftNode.next = currNode.next
        this.size-- */

        //方法二：此时curNode为目标节点的上一个节点
        /* var curNode = this.head
        while(curNode.next.val != target){
            curNode = curNode.next
        } */
        var curNode = this.findPreious(target)
        curNode.next = curNode.next.next
        this.size--
    }


    // 尾插法在链表尾部添加元素，即链表实现
    appendNode(element) {
        var curNode = this.findLast()//先找到链表的最后一个结点
        var newNode = new Node(element)//创建一个新的节点
        // 将新创建的结点放入链表的最后一个结点后面（即将新结点插入链表尾部）
        curNode.next = newNode
        newNode.next = null
        this.size++//因为新插入了结点，使得链表长度加一
    }
}

// 测试链表
var slist = new singleLinked()
var arr = [1001, 1234, 1006, 7788, 5512, 6129]
for (var i = 0; i < arr.length; i++) {
    slist.appendNode(arr[i])
}
slist.disPlayList()
slist.deleteNode(1001) 
slist.disPlayList()