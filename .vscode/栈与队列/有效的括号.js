/* 使用栈的对称性
见到括号与对称性问题，考虑使用栈，左括号的进栈顺序与右括号的出栈顺序一致
*/
/* 解法一 */
var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      switch (c) {
        case '(':
          stack.push(')');
          break;
        case '[':
          stack.push(']');
          break;
        case '{':
          stack.push('}');
          break;
        default://判断左右括号是否匹配
          if (c !== stack.pop()) {
            return false;
          }
      }
    }
    return stack.length === 0;//左边括号比右边元素括号多
  };

  /*解法二 */
  // 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const isValid = function(s) {
    // 结合题意，空字符串无条件判断为 true
    if (!s) {
      return true;
    }
    // 初始化 stack 数组
    const stack = [];
    // 缓存字符串长度
    const len = s.length;
    // 遍历字符串
    for (let i = 0; i < len; i++) {
      // 缓存单个字符
      const ch = s[i];
      // 判断是否是左括号，这里我为了实现加速，没有用数组的 includes 方法，直接手写判断逻辑
      if (ch === "(" || ch === "{" || ch === "[") stack.push(leftToRight[ch]);
      // 若不是左括号，则必须是和栈顶的左括号相配对的右括号
      else {
        // 若栈为空，或栈顶的左括号没有和当前字符匹配上，那么判为无效
        if (!stack.length || stack.pop() !== ch) {
          return false;
        }
      }
    }
    // 若所有的括号都能配对成功，那么最后栈应该是空的
    return !stack.length;
  };
