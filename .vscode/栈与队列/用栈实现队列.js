/* @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
    return this.stack1
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
//    stack2为空，则将stack1的元素转移进来
if(this.stack2.length <= 0){
    // stack1不为空时，出栈
    while(this.stack1.length !== 0){
        // stack1的元素压入stack2中，stack2栈顶元素为队头元素
        this.stack2.push(this.stack1.pop())
    }
}
return this.stack2.pop() 
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
   if(this.stack2.length <= 0){
    // stack1不为空时，出栈
    while(this.stack1.length !== 0){
        // stack1的元素压入stack2中，stack2栈顶元素为队头元素
        this.stack2.push(this.stack1.pop())
    }
}
    return this.stack2[this.stack2.length-1]
};  

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
// 若stack1与stack2为空，则队列都为空
return !this.stack1.length&&!this.stack2.length
};