function findDivisibleNumbers(n) {
    const res = [];

    if (n <= 0) {
        throw RangeError("Number must be a positive integer");
    }

    if (isNaN(n)) {
        throw TypeError("Parameter must be a positive integer number");
    }

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            res.push(i);
        }
    }

    return res;
}

console.log(findDivisibleNumbers(30));
console.log(findDivisibleNumbers(-7));
