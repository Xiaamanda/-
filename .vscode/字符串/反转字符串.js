/* 调用内置API法:不满足原地修改数组 */
var reverseString = function(s) {
    const res = s.split(",").reverse.join()
    return res
};

/* 循环法
类似于冒泡排序。使用循环元素从头冒到尾部
 */
var reverseString = function(s) {
    for(let i = 0;i<s.length-1;i++){
        for(j=0;j<s.length - 1-i;j++){
           [s[j],s[j+1]] =[s[j+1],s[j]]
        }
    }
}
 
/*双指针法：对撞指针
两个指针所指的元素相交换
*/
var reverseString =function (s) {
    let left = 0
    let right = s.length-1
    while (left<=right) {
       [s[left],s[right]] = [s[right],s[left]] 
       left++
       right--
    }
}
