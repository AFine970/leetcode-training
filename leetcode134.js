/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 134. 加油站
 */
var canCompleteCircuit = function (gas, cost) {
    const totalGas = gas.reduce((prev, curr) => {
        return prev + curr
    }, 0)

    const totalCost = cost.reduce((prev, curr) => {
        return prev + curr
    }, 0)

    if (totalCost > totalGas) {
        return -1
    }

    // 定义起始的下标和起始的油气
    let currentGas = 0
    let start = 0

    for (let i = 0; i < gas.length; i++) {
        currentGas = currentGas + gas[i] - cost[i]
        // 油气不够，则从下一个节点开始
        if (currentGas < 0) {
            currentGas = 0
            start = i + 1
        }
    }

    return start
};

// const gas = [2, 3, 4]
// const cost = [3, 4, 3]
// console.log(canCompleteCircuit(gas, cost))

// const gas = [1, 2, 3, 4, 5]
// const cost = [3, 4, 5, 1, 2]

gas = [1, 2, 3, 4, 3, 2, 4, 1, 5, 3, 2, 4]
cost = [1, 1, 1, 3, 2, 4, 3, 6, 7, 4, 3, 1]
console.log(canCompleteCircuit(gas, cost))
