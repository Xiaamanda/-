
/* 双向链表:有两个指针域，一个指向前驱节点，一个指向后继节点 */
// 实现链表结点
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.pre = null;
    }
}

// 实现链表主体
class doubleLinked {
    constructor() {
        this.head = new Node('head')  //记录链表的头指针
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
        while (curNode.val!== target) {
            curNode = curNode.next
        }
        return curNode
    }

    // 在指定节点后面插入节点(先设置该节点的next，再设置前面节点的next指向被插入节点)
    insert(newNode, target) {
        var newNode = new Node(newNode)
        var curNode = this.find(target)
        newNode.next = curNode.next
        curNode.next.pre = curNode
        curNode.next = newNode
    }

    // 遍历链表（正序）
    disPlayList() {
        var list = ''
        var curNode = this.head //从链表的头指针开始
        while (curNode !== null) {//若当前结点不为空，则表明当前结点中存在数据
            list += curNode.val
            // 让当前结点的指针指向下一节点
            curNode = curNode.next
        }
        console.log(list)
    }

    // 遍历链表(反序)
    disPlayListRe(){
        var list = ''
        var curNode = this.head
        curNode =this.findLast()
        while(curNode.pre!==null){
            list += curNode.val
            curNode = curNode.pre
        }
        console.log(list)
    }

    // 获取链表最后一个结点
    findLast() {
        var curNode = this.head
        while (curNode.next) {
            curNode = curNode.next
        }
        return curNode
    }

    //删除结点（关键点：相比单向链表，删除更加方便，不需要再次查找前驱节点）
    deleteNode(target){
      var curNode = this.find(target)
      if(curNode.next!== null){
        curNode.pre.next = curNode.next
        curNode.next.pre = curNode.pre
        // 回收
        curNode.next = null
        curNode.pre = null
        this.size--
      } 
    }


    // 尾插法在链表尾部添加元素，即链表实现
    appendNode(element) {
        var curNode = this.findLast()//先找到链表的最后一个结点
        var newNode = new Node(element)//创建一个新的节点
        // 将新创建的结点放入链表的最后一个结点后面（即将新结点插入链表尾部）
        curNode.next = newNode
        newNode.pre = curNode
        newNode.next = null
        this.size++//因为新插入了结点，使得链表长度加一
    }
}

// 测试链表
var slist = new doubleLinked()
var arr = [1001, 1234, 1006, 7788, 5512, 6129]
for (var i = 0; i < arr.length; i++) {
    slist.appendNode(arr[i])
}
slist.disPlayList()
slist.deleteNode(5512) 
slist.disPlayList()
slist.disPlayListRe()