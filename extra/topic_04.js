const value = 5;

function double(value) {
  return new Promise((resolve) => {
      resolve(value * 2);
  })
}

function addTen(value) {
    return new Promise((resolve) => {
        resolve(value + 10);
    })
}

double(value)
    .then(addTen)
    .then((result) => {
        console.log(result); // 20
    });
