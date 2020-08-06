const arrowFunction = num => num*2;
const result = arrowFunction(2);
console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const sum1 = sum * diff;
    return sum;
}
const result = doMath(3,2);
console.log(result);