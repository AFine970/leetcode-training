// 有效的括号

var isValid = function (s) {
    if(s.length < 2) return false
    let map = new Map()
    // 把符号的对应关系建立起来
    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')
    let flag = true

    // 创建一个栈（小技巧：遇到模板字符串的解析，基本都需要使用到栈）
    let stack = []
    for (let index = 0; index < s.length; index++) {
        const element = s[index]
        if (map.has(element)) {
            // 遇到起始的符号的时候，就进栈
            stack.push(map.get(element))
        } else {
            // 否则出栈
            let stack_pop = stack.pop()
            // 使用出栈的元素和当前元素对比，判断括号是不是闭合的
            if (stack_pop !== element) {
                return false
            }
        }
    }

    // 如果都是合法的括号的话，stack最终会是空栈
    if (stack.length) {
        flag = false
    }

    return flag
};

let s = "(("
console.log(isValid(s))