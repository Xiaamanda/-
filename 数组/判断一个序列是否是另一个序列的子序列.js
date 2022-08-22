/* 双指针法：
    js本来提供字符串数组排序的方法array.sort()，但是本题若排序会导致顺序错乱
    用双指针法来确定父序列中是否有该序列中的元素且元素顺序一致,只有当最后的i指向整个子序列后面一位时，才算是父序列的子序列
    将字符串转为数组，可以使用Array.of()、Array.from(),不能使用new Array()，会导致数组只有一个元素
    注意区别：new Set() new Map() new Array(),第一个可以使用字符串作为参数，生成的set尺寸为字符串的长度；第二个不能使用字符串作为参数，使用数组作为参数时，必须保证数组是二维的；第三个使用字符创作为参数，将导致生成数组长度为1
 */
var isSubsequence = function (s, t) {
    let i = 0
    let j = 0
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    return i == t.length
};
console.log(isSubsequence('abc', 'ahbgdc'))
