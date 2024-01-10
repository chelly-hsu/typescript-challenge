"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleInfo = void 0;
/**
 * 獲取車輛的詳細資訊
 * @param vehicle - 車輛物件，應該包含 brand、model 和 year 三個屬性
 *
 * 範例:
 * 輸入: { brand: 'Toyota', model: 'Corolla', year: 2020 }
 * 輸出: 'Toyota Corolla (2020)'
 */
function vehicleInfo(vehicle) {
    return "".concat(vehicle.brand.trim(), " ").concat(vehicle.model.trim(), " (").concat(vehicle.year, ")");
}
exports.vehicleInfo = vehicleInfo;
