delay(2000).then(() => console.log('Пройшло 2 секунди'));


function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}

// Виклик функції
delay(5000).then(() => console.log('Пройшло 5 секунд'));
