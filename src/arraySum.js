"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySum = void 0;
/**
 * 計算數字陣列的總和
 * @param numbers - 要計算總和的數字陣列
 *
 * 範例:
 * 輸入: [1, 2, 3, 4, 5]
 * 輸出: 15
 *
 * 輸入: [-1, -2, -3]
 * 輸出: -6
 *
 * 輸入: []
 * 輸出: 0
 */
function arraySum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
exports.arraySum = arraySum;
