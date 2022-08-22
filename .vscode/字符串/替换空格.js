/*调用api方法：
splice()注意插入、删除的位置的索引
join()数组转字符串 split()字符串转数组 二者注意分割符的使用
  */
var replaceSpace = function (s) {
    let a = s.split(" ")
    let len = a.length
    let i = 1
    while (i < len + len - 1) {
        a.splice(i,0,'20%')
        i +=2
    }
    return a.join("")
};

/*双指针法：
跟调用api方法一致，先将字符串转为数组再扩容；再使用双指针从后往前进行数组元素的填充
Array.from()字符串转为数组，默认分割符为"" */
var replaceSpace = function(s) {
    // 字符串转为数组
   const strArr = Array.from(s);
   let count = 0;
 
   // 计算空格数量
   for(let i = 0; i < strArr.length; i++) {
     if (strArr[i] === ' ') {
       count++;
     }
   }
 
   let left = strArr.length - 1;
   let right = strArr.length + count * 2 - 1;
 
   while(left >= 0) {
     if (strArr[left] === ' ') {
       strArr[right--] = '0';
       strArr[right--] = '2';
       strArr[right--] = '%';
       left--;
     } else {
       strArr[right--] = strArr[left--];
     }
   }
 
   // 数组转字符串
   return strArr.join('');
 };