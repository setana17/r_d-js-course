function solvePaliandr(valueNumber) {
    const valueString = valueNumber.toString();
    const valueArray = valueString.split('');
    let res = true;
    for (let i = 0; i < valueArray.length; i++) {
        if (!(valueArray[i] === valueArray[valueArray.length - i - 1])) {
            res = false;
            break;
        }
    }
    return res;
}

console.log(solvePaliandr(157521));
