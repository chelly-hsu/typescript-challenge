"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullName = void 0;
/**
 * 獲取用戶的全名
 * @param user - 用戶物件，應該包含 firstName 和 lastName 兩個屬性
 *
 * 範例:
 * 輸入: { firstName: 'John', lastName: 'Doe' }
 * 輸出: 'John Doe'
*/
function getFullName(user) {
    return "".concat(user.firstName.trim(), " ").concat(user.lastName.trim());
}
exports.getFullName = getFullName;
