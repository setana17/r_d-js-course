function findDivisibleNumbers(n) {
    const res = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            res.push(i);
        }
    }

    return res;
}

console.log(findDivisibleNumbers(20));
