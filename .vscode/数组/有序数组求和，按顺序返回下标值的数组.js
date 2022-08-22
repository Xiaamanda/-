/* map方法：
利用map的键名与键值可以是任意形式的数据，只遍历一遍数组，使用has()方法来判断map中的元素是否等于目标值-当前元素的值 
*/
/* var twoSum = function(numbers, target) {
    var map = new Map
    var len = numbers.length
    var res = []
    for(let i= 0;i<len;i++){
        if(map.has(target-numbers[i])){
            res.push(map.get(target-numbers[i]),i+1)
        }else{
            map.set(numbers[i],i+1)
        }
    }
    return res
} */

/* 二分查找法:
数组有序，使用二分查找法，注意尽量不要使用闭包，使得内存溢出
*/
/* var twoSum = function(numbers, target) {
  const len = numbers.length
  const res = []
  let left,right
  for(let i = 0; i<len; i++){
    left = i+1
    right = len - 1
    while(left<=right){
        let mid = left+Math.floor((right-left)/2)
        if(numbers[mid]<target-numbers[i]){
            left = mid + 1
        }else if(numbers[mid]>target-numbers[i]){
            right = mid -1
        }else{
           return [i+1,mid+1]
        }
    }
  }
} */

/* 双指针法：
    数组有序，使用双指针法
 */
var twoSum = function(numbers, target) {
      let left = 0
      let right = numbers.length-1
      while(left<right){
          if(numbers[right]+numbers[left] == target){
              return [left+1,right+1]
          }else if(numbers[right]+numbers[left]>target){
              right--
          }else{
             left++
          }
      }
    }
console.log(twoSum([1,3,7,9,12],15))