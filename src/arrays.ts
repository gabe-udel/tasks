/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let ans: number[] = [];

    if (numbers.length !== 0) {
        ans[0] = numbers[0];
        ans[1] = numbers[numbers.length - 1];
    }

    return ans;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const ans: number[] = numbers.map((x: number): number => x*3);
    return ans;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ans: number[] = numbers.map(
        (x: string): number => {
            const res: number = Number(x);
            if (Number.isNaN(res)) return 0;
            return res;
        }
    )
    return ans;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const ans: number[] = amounts.map(
        (x: string): number => {
            if (x[0] === '$') x = x.replace("$", "");
            const res: number = Number(x);
            if (Number.isNaN(res)) return 0;
            return res;
        }
    )
    return ans;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages.filter(
        (x: string): boolean => !x.endsWith('?')
    ).map(
        (x: string): string => {
            if (x.endsWith('!')) x = x.toUpperCase();
            return x; 
        }
    )
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((x: string): boolean => x.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every((x: string): boolean => ["red", "green", "blue"].includes(x))
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return addends.reduce((total: number, x: number) : number => total + x, 0).toString()
    + "="
    + (addends.length > 0 ? addends.join("+") : "0");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */ 
export function injectPositive(values: number[]): number[] {
    const negIndex: number  = values.findIndex((x: number): boolean => x < 0);
    const preNegSum = (sumIndex: number): number => values.slice(0, sumIndex).reduce((sum: number, x:number):number => sum + x, 0); 

    if (negIndex === -1) { // there is no negative value
        return [...values, preNegSum(values.length)];
    }

    return [...values.slice(0, negIndex + 1), preNegSum(negIndex), ...values.slice(negIndex + 1, values.length)];
}
