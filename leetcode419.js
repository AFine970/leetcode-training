/**
 * @param {character[][]} board
 * @return {number}
 * 419. 甲板上的战舰
 */
var countBattleships = function (board) {
    let count = 0
    function dfs(row, col) {
        if (row < 0 || col < 0 || row > board.length - 1 || col > board[0].length - 1 || board[row][col] === '.') {
            return
        }
        // 沉没
        board[row][col] = '.'

        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 'X') {
                count++
                dfs(row, col)
            }
        }
    }

    return count
};

const board = [["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]
// 2

const res = countBattleships(board)
console.log('res', res);