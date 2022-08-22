/* 无脑解法：
升序排序后，取第一个元素 */
 var minArray = function(numbers) {
    array1 = numbers.sort((a,b)=>a-b)
    return array1[0]
}; 

/* 二分法：
旋转数组等同于将两个有序数组拼接在一起，拼接处第二个数组的第一个元素最小 */
var minArray = function(numbers) {
    let left = 0
    let right = numbers.length - 1
    while(left<right){
        let mid = left+Math.floor((right-left)/2)
        if(numbers[mid]<numbers[right]){
            right=mid
        }else if(numbers[mid] >numbers[right]){
            left = mid+1
        }else {
            right--
        }
    }
    return numbers[left]
};
console.log(minArray(34512))