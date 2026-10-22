export function romanToInteger(str) {
    let result = 0;

    const romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < str.length; i++) {
        const current_letter = romanNum[str[i]];
        const next_letter = romanNum[str[i + 1]];

        if (next_letter !== undefined && current_letter < next_letter) {
        result -= current_letter;
        } 
        else {
        result += current_letter;
        }
    }
    return result;
}
