/* 暴力解法(解法有问题) */
/* var minSubArrayLen = function(target, nums) {
    let sum,curMinLength
    let result = Number.MAX_VALUE
    for(i=0;i<nums.length;i++){
       sum = 0
       result = 0
       for(j=i;j<nums.length;j++){
        sum = sum + nums[j]
        if(sum>=target){
          curMinLength = j - i + 1
          result = result<curMinLength?result : curMinLength
          break;
        }
       }  
    }
    return result === initial ? 0:result
}; */


/* 双指针之大小变化的滑动窗口法
 */
var minSubArrayLen = function(target, nums) {
    let len = nums.length
    if(len==0){
        return 0
    }
    let res =Number.MAX_VALUE
    let start = 0
    let end = 0
    let sum = 0
    while(end<len){
        sum += nums[end]
        while(sum>=target){
            res = Math.min(res,end-start+1)
            sum -= nums[start]
            start++
        }
        end++
    }
    return res == Number.MAX_VALUE ? 0:res
};
