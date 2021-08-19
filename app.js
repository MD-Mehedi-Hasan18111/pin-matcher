const PIN = () => {
    let pin = Math.round(Math.random() * 10000);
    if (pin < 1000) {
        return PIN();
    }
    else {
        return pin;
    }
}

const generatePin = () => {
    const pinNumber = PIN();
    document.getElementById('pin-display').value = pinNumber;
}

document.getElementById('keys').addEventListener('click', (event) => {
    const number = (event.target.innerText);
    const calcDisplay = document.getElementById('calc-display');
    if (isNaN(number)) {
        if (number == 'C') {
            calcDisplay.value = '';
        }

        if (number == '<') {
            const removeDigit = calcDisplay.value.slice(0, -1);
            calcDisplay.value = removeDigit;
        }
    }
    else {
        const previousValue = calcDisplay.value;
        const newCalcValue = previousValue + number;
        calcDisplay.value = newCalcValue;
    }
})

const verifyPin = () => {
    const generatePin = document.getElementById('pin-display').value;
    const typedPin = document.getElementById('calc-display').value;

    if (generatePin == typedPin) {
        document.getElementById('success').style.display = "block";
        document.getElementById('failed').style.display = "none";
    }
    else {
        document.getElementById('failed').style.display = "block";
        document.getElementById('success').style.display = "none";
    }
}