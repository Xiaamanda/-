/* 调用api法：
注意：字符串不能用swap函数
 */
var reverseLeftWords = function (s, n) {
    const length = s.length;
    let i = 0;
    while (i < length - n) {
        s = s[length - 1] + s;
        i++;
    }
    return s.slice(0, length);
};

/* 双指针法：
分别反转k之前后k之后的元素；再整体反转
注意：除非输入字符串默认为字符串数组，否则需要将字符串转为数组才可生效 */
var reverseLeftWords = function (arr, n) {
    // 定义反转函数
    function reverse(s, left, right) {
        let start = left
        let end = right
        while (start <= end) {
            [s[start], s[end]] = [s[end], s[start]]
            start++
            end--
        }
    }
    //局部反转k之前和之后的字符串
    reverse(arr, 0, n - 1)
    reverse(arr, n, arr.lengthg - 1)
    reverse(arr, 0, arr.length - 1)
};
