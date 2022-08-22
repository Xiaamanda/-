/* 数组中的元素在内存空间中的地址是连续的，不能直接删除，只能覆盖(该说法在js中并不准确) */
/*暴力解法：两层循环,里层用于更新数组，外层用于遍历数组查找有无对应元素
  */
 var removeElement = function(nums, val) {
    var len = nums.length
    for(i=0;i<len;i++){
        if(nums[i]==val){
            // 将后面的元素都往前推一位
            for(j=i+1;j<len;j++){
                nums[j-1]=nums[j]
            }
            i--
            len--
        }
    }
    return len
}; 

/*双指针之快慢指针解法*/
 var removeElement = function(nums, val) {
    let slow = 0
    for(fast=0;fast<nums.length;fast++){
        if(nums[fast]!==val){
            nums[slow]=nums[fast]
            slow++
        }
    }
    return slow
};
 
/* 双指针之对撞指针解法：
    左指针：指向当前元素，右指针：若前面有与目标值相等的元素则用该指针指向的元素覆盖左指针指向的元素
 */
var removeElement = function(nums, val) {
    let left =0
    let right = nums.length
    while(left<right){
        if(nums[left]===val){
            nums[left]=nums[right-1]
            right--
        }else{
            left++
        }
    }
    return left
};
