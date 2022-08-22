
/*回文字符串：判断一个字符串是否是回文字符串*/ 

    // 方法一：字符串反转法判断
    function isHW(str){
        // 字符串反转
        const reverseStr = str.split('').reverse().join('')
        // 判断反转后与原字符串是否相等
        return reverseStr === str
    }
   console.log(isHW('wahaha')) 

    //方法二：判断从中间分开的字符串是否完全对称 
    function isHW1(str){
        // 缓存字符串的长度
        const len = str.length
        // 遍历前部分，判断与后半部分是否对称
        for(let i = 0; i < len/2; i++){
            if(str[i]!==str[len-1-i]){
                return false
            }
            return true
        }
    }   
    console.log(isHW1('wahaahaw'))
    console.log(isHW1('wahaha'))

    // 回文字符串衍生：给定非空字符串s,最多删除一个字符串，判断能否成为回文字符串
    // 回文关键词：对称性、双指针
    const voidHW = function(str){
        const len = str.length
        // 定义左右指针
        let i = 0, j = len -1
        // 当左右指针指向元素对称时，同时向中间前进
        while(i<j&&str[i]===str[j]){
            i++;
            j--;
        }
        // 判断尝试跳过左指针元素后字符串是否回文
        if(isHW3(i+1,j)){
            return true
        }
        // 判断尝试跳过右指针元素后字符串是否回文
        if(isHW3(i,j-1)){
            return true
        }

        // 工具方法isHW3,判断字符串是否回文
        function isHW3(st,ed){
            while(st<ed){
                if(str[st]!==str[ed]){
                    return false
                }
                st++;
                ed--;
            }
            return true
        }
        
        return false
    }
    console.log(`是回文字符嘛${voidHW('waaaw')}`)
