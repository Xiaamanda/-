/* next数组为-1版 */
var strStr = function (haystack, needle) {
    if (needle.length === 0)
        return 0;

    //next构造函数(i指向needle后缀末尾，j指向前缀末尾)
    const getNext = (needle) => {
        //初始化next数组 
        let next = []
        let j = -1
        next[0] = j

        for (let i = 1; i < needle.length; i++) {
            
            while (j >= 0 && needle[i] !== needle[j + 1]) {
                j = next[j]
            }
            // 前后缀末尾不相等
            if (needle[i] === needle[j + 1]) {
                j++;
            }
            next.push(j)
        }
        return next
    }
    // 构造next数组
    let next = getNext(needle)

    // 匹配 j指向needle i指向haystack
    let j = -1
    for (let i = 0; i < haystack.length; i++) {
        while (j >= 0 && haystack[i] !== needle[j + 1]) {
            j = next[j]
        }
        if (haystack[i] === needle[j + 1]) {
            j++;
        }
        // j指向模式串的最后一位，则匹配成功
        if (j === needle.length - 1) {
            return (i - needle.length + 1)
        }
    }
    
    return -1
}



/* 前缀表不变 */
var strStr = function (haystack, needle) {
    if (needle.length === 0)
        return 0;

    const getNext = (needle) => {
        let next = [];
        let j = 0;
        next.push(j);

        for (let i = 1; i < needle.length; ++i) {
            while (j > 0 && needle[i] !== needle[j])
                j = next[j - 1];
            if (needle[i] === needle[j])
                j++;
            next.push(j);
        }
        return next;
    }

    let next = getNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; ++i) {
        while (j > 0 && haystack[i] !== needle[j])
            j = next[j - 1];
        if (haystack[i] === needle[j])
            j++;
        if (j === needle.length)
            return (i - needle.length + 1);
    }

    return -1;
};