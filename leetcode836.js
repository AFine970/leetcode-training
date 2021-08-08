/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 * 836. 矩阵重叠
 */
var isRectangleOverlap = function (rec1, rec2) {
    // 判断是不是矩形
    if (rec1[0] === rec1[2] && rec1[1] === rec1[[3]]) return false
    if (rec2[0] === rec2[2] && rec2[1] === rec2[[3]]) return false

    // 矩阵不相交的情况（关键！！！）
    // 1. 矩阵1右 <= 矩阵2左
    // 2. 矩阵1左 >= 矩阵2右
    // 3. 矩阵1下 >= 矩阵2上
    // 4. 矩阵1上 <= 矩阵2下
    if (rec1[2] <= rec2[0] || rec1[0] >= rec2[2] || rec1[1] >= rec2[3] || rec1[3] <= rec2[1]) {
        return false
    }

    return true
};