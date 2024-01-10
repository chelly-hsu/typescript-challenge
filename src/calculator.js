"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add100 = exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
/**
 * 將兩個數字相加
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error('帶入格式不正確');
    }
    return a + b;
}
exports.add = add;
/**
 * 將兩個數字相減
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error('帶入格式不正確');
    }
    return a - b;
}
exports.subtract = subtract;
/**
 * 將兩個數字相乘
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error('帶入格式不正確');
    }
    return a * b;
}
exports.multiply = multiply;
/**
 * 將兩個數字相除
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error('帶入格式不正確');
    }
    if (b <= 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
exports.divide = divide;
/**
 * 實現加法函數，結果不能超過 100。
 *
 * @param a 第一個加數。
 * @param b 第二個加數。
 * @returns 兩個數字的和，但不超過 100。
 */
function add100(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error('帶入格式不正確');
    }
    var sum = a + b;
    return sum > 100 ? 100 : sum;
}
exports.add100 = add100;
