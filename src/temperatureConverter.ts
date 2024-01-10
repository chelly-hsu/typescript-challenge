/**
 * 將攝氏溫度轉換為華氏溫度
 * @param celsius - 攝氏溫度
 * @returns 華氏溫度
 */
export function celsiusToFahrenheit(celsius: number): number {
    if (typeof celsius !== "number"){
        throw new Error('帶入格式不正確');
    }
    return (1.8 * celsius) + 32
}