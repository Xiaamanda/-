//1 数组创建方法
const arr = new Array(7)
const arr1 = new Array(7)
const arr2 = new Array(7)
arr.fill("hard")
arr1.fill(1)
arr2.fill(2)

//2 数组遍历
// 方法1，for遍历
 const len = arr.length
 for(let i=0;i<len;i++){
     console.log(arr[i],i)
 };
//  forEach遍历
arr1.forEach((item)=>{
    console.log(item)
})
// map遍历，有返回值，不直接对数组进行操作，而是克隆了了一份原数组对其进行操作
const arrMap = arr2.map((item,index)=>{
    return item+1
})
// 输出为3333333
console.log(arrMap);
// 输出为2222222
console.log(arr2)

// 二维数组：数组的每个元素也为数组
const arr21 = [[],[],[],[]]
console.log(arr21)
// 3.二维数组
// 初始化(使用fill会使得每个数组子元素都会被修改)
// 初始化方法1：for循环
const arr22 = new Array(7);
const len2 = arr22.length;
for(let i = 0;i<len2;i++){
    arr22[i]=[]
}
console.log(arr22)
// 二维数组遍历
// 几维数组就用几层循环