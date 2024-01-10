"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrafficLightStatus = exports.TrafficLight = void 0;
/**
 * 這個函式的目的是根據輸入的交通信號燈狀態返回對應的描述。
 * 你需要使用 TypeScript 的 Enum 來定義交通信號燈的狀態，並在函式中返回對應的描述。
 * Enum 應該包含 Red、Yellow 和 Green 三種狀態，並分別對應到 'Red'、'Yellow' 和 'Green' 三個字串。
 *
 * 範例:
 * 輸入: TrafficLight.Red
 * 輸出: 'The traffic light is Red'
 */
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight = exports.TrafficLight || (exports.TrafficLight = {}));
function getTrafficLightStatus(light) {
    // return '123'
    return "The traffic light is ".concat(TrafficLight[light]);
}
exports.getTrafficLightStatus = getTrafficLightStatus;
