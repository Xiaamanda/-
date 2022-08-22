 // 双指针法，定义两个指针，各指向两个数组生效的尾部
 const merge = function(nums1,m,nums2,n){
    // 初始化两个指针的指向，初始化nums1尾部索引k
    let i = m - 1, j = n - 1, k = m + n -1
    // 当两个数组都没有遍历完时，指针同步移动
    while(i >= 0 && j >= 0){
        // 取较大的值，从末尾往前补
        if(nums1[i] >= nums2[j]){
            nums1[k] = nums1[i];
            i--;
            k--;
        }else{
            nums1[k]=nums2[j];
            j--;
            k--;
        }
    }

    //nums2留下的情况
    while(j>=0){
        nums1[k]=nums2[j]
        k--;
        j--;
    } 
}
merge(arr1,3,arr2,4)
console.log(arr1)