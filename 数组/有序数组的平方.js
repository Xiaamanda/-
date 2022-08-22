/* 无脑解法
 */
var sortedSquares = function (nums) {
    let res = []
    for (i = 0; i < nums.length; i++) {
        res.push(nums[i] * nums[i])
    }
    return res.sort((a, b) => a - b)
};

/*双指针法之对撞指针法
因为原数组有序，且可以看成是两个有序数组的合并，因此数组元素平方后的最大值一定在原数组的两端；设定一个空数组，左右两个指针指向首尾（与两个有序数组合并一致），将两个数组元素求平方后合并
*/
var sortedSquares = function (nums) {
    let right = nums.length - 1
    let left = 0
    let res =[]
    // 也可以设置一个pos标志，指向新生成数组的末尾，并随着循环依次向前移动
    while (left <= right) {
        if(nums[right]*nums[right]<=nums[left]*nums[left]){
            res.unshift(nums[left])
        }else{
            res.unshift(nums[right])
        }
    }
    return res
};